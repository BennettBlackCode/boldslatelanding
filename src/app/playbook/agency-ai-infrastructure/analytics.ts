'use client';

// ============================================
// Landing Page Analytics Tracking Script
// Tracks: User ID, UTM params, time on page, scroll depth, device type
// Sends data to N8N webhook on page load, page exit, and periodic heartbeats
// 
// RELIABILITY FEATURES:
// - Heartbeat pings every 30 seconds (so you know when they were last active)
// - Multiple exit detection: visibilitychange + blur + beforeunload + pagehide
// - Tab switch detection fires exit event immediately
// ============================================

// Using local API proxy to bypass ad blockers
const WEBHOOK_URL = '/api/track';

// Lead magnet identifier for this specific page
const LEAD_MAGNET_SLUG = 'agency-ai-infrastructure';

// Heartbeat interval in milliseconds (60 seconds)
const HEARTBEAT_INTERVAL = 60000;

// ============================================
// Type Definitions
// ============================================

interface TrackingData {
  id: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  time_on_page_seconds: number;
  max_scroll_percent: number;
  device_type: 'mobile' | 'tablet' | 'desktop';
  event_type: 'page_open' | 'page_exit' | 'heartbeat' | 'tab_hidden' | 'tab_visible';
  timestamp: string;
  page_url: string;
  lead_magnet_slug: string;
}

// ============================================
// State Variables
// ============================================

let pageLoadTime: number = 0;
let maxScrollPercent: number = 0;
let trackingData: Partial<TrackingData> = {};
let isInitialized: boolean = false;
let heartbeatInterval: NodeJS.Timeout | null = null;
let hasPageExitFired: boolean = false; // Prevent duplicate exit events

// ============================================
// Utility Functions
// ============================================

/**
 * Parse URL parameters from current page URL
 */
function getUrlParams(): Record<string, string | null> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  
  return {
    id: params.get('id'),
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
  };
}

/**
 * Detect device type from user agent
 */
function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const ua = navigator.userAgent.toLowerCase();
  
  // Check for tablets first (they often contain 'mobile' too)
  if (/ipad|tablet|playbook|silk/.test(ua) || 
      (ua.includes('android') && !ua.includes('mobile'))) {
    return 'tablet';
  }
  
  // Check for mobile devices
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/.test(ua)) {
    return 'mobile';
  }
  
  return 'desktop';
}

/**
 * Calculate current scroll percentage
 */
function calculateScrollPercent(): number {
  if (typeof window === 'undefined') return 0;
  
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  if (scrollHeight === 0) return 100; // Page fits in viewport
  
  return Math.round((scrollTop / scrollHeight) * 100);
}

/**
 * Calculate time on page in seconds
 */
function getTimeOnPage(): number {
  if (pageLoadTime === 0) return 0;
  return Math.round((Date.now() - pageLoadTime) / 1000);
}

/**
 * Get current ISO timestamp
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

// ============================================
// Tracking Functions
// ============================================

/**
 * Send tracking data to webhook
 */
function sendTrackingEvent(eventType: 'page_open' | 'page_exit' | 'heartbeat' | 'tab_hidden' | 'tab_visible'): boolean {
  const payload: TrackingData = {
    id: trackingData.id || null,
    utm_source: trackingData.utm_source || null,
    utm_medium: trackingData.utm_medium || null,
    utm_campaign: trackingData.utm_campaign || null,
    utm_content: trackingData.utm_content || null,
    time_on_page_seconds: getTimeOnPage(),
    max_scroll_percent: maxScrollPercent,
    device_type: trackingData.device_type || 'desktop',
    event_type: eventType,
    timestamp: getTimestamp(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    lead_magnet_slug: LEAD_MAGNET_SLUG,
  };

  console.log(`[Analytics] 📊 Sending ${eventType} event:`, payload);

  try {
    // Use sendBeacon for exit/hidden events (more reliable during page unload)
    // Use fetch for heartbeats and visible events (more reliable for regular requests)
    const useBeacon = eventType === 'page_exit' || eventType === 'tab_hidden';
    
    if (useBeacon && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      const success = navigator.sendBeacon(WEBHOOK_URL, blob);
      
      if (success) {
        console.log(`[Analytics] ✅ ${eventType} event sent successfully via sendBeacon`);
      } else {
        console.warn(`[Analytics] ⚠️ sendBeacon returned false, trying fetch...`);
        // Fallback to fetch with keepalive
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(err => console.error('[Analytics] ❌ Fetch fallback failed:', err));
      }
      return success;
    } else {
      // Use fetch for heartbeats and regular events
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(err => console.error('[Analytics] ❌ Fetch failed:', err));
      return true;
    }
  } catch (error) {
    console.error('[Analytics] ❌ Error sending tracking event:', error);
    return false;
  }
}

/**
 * Handle scroll events - update max scroll percentage
 */
function handleScroll(): void {
  const currentScroll = calculateScrollPercent();
  if (currentScroll > maxScrollPercent) {
    maxScrollPercent = currentScroll;
    console.log(`[Analytics] 📜 New max scroll: ${maxScrollPercent}%`);
  }
}

/**
 * Handle page unload - send exit event
 */
function handlePageExit(): void {
  if (hasPageExitFired) {
    console.log('[Analytics] ⏭️ Page exit already fired, skipping duplicate...');
    return;
  }
  hasPageExitFired = true;
  stopHeartbeat();
  console.log('[Analytics] 👋 Page exit detected, sending final tracking data...');
  sendTrackingEvent('page_exit');
}

/**
 * Handle visibility change (for tab switching)
 * Fires tab_hidden when user switches away, tab_visible when they return
 * This is MORE RELIABLE than beforeunload for tab switches
 */
function handleVisibilityChange(): void {
  if (document.visibilityState === 'hidden') {
    console.log('[Analytics] 👁️ Page hidden (tab switch/minimize), sending tab_hidden event...');
    stopHeartbeat();
    sendTrackingEvent('tab_hidden');
  } else if (document.visibilityState === 'visible' && isInitialized) {
    console.log('[Analytics] 👁️ Page visible again, sending tab_visible event...');
    // Don't reset the session - just continue tracking
    // This way we can see the full journey
    startHeartbeat();
    sendTrackingEvent('tab_visible');
  }
}

/**
 * Handle window blur (additional fallback for tab switch detection)
 * Some browsers fire this before visibilitychange
 */
function handleWindowBlur(): void {
  console.log('[Analytics] 🔇 Window blur detected, sending tab_hidden as backup...');
  stopHeartbeat();
  // Don't send duplicate if visibility change just fired
  if (document.visibilityState === 'hidden') {
    return; // visibilitychange already handled this
  }
  sendTrackingEvent('tab_hidden');
}

/**
 * Handle window focus (additional fallback)
 */
function handleWindowFocus(): void {
  console.log('[Analytics] 🔊 Window focus detected...');
  if (document.visibilityState === 'visible') {
    startHeartbeat();
  }
}

/**
 * Handle pagehide event (iOS Safari specific - fires more reliably than beforeunload)
 */
function handlePageHide(): void {
  if (hasPageExitFired) return;
  hasPageExitFired = true;
  stopHeartbeat();
  console.log('[Analytics] 📱 pagehide event (iOS Safari), sending page_exit...');
  sendTrackingEvent('page_exit');
}

/**
 * Start heartbeat pings (every 30 seconds while page is visible)
 */
function startHeartbeat(): void {
  if (heartbeatInterval) {
    console.log('[Analytics] 💓 Heartbeat already running');
    return;
  }
  console.log('[Analytics] 💓 Starting heartbeat (every 60s)');
  heartbeatInterval = setInterval(() => {
    if (document.visibilityState === 'visible') {
      console.log('[Analytics] 💗 Sending heartbeat ping...');
      sendTrackingEvent('heartbeat');
    }
  }, HEARTBEAT_INTERVAL);
}

/**
 * Stop heartbeat pings
 */
function stopHeartbeat(): void {
  if (heartbeatInterval) {
    console.log('[Analytics] 💔 Stopping heartbeat');
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
}

// ============================================
// Main Initialization
// ============================================

/**
 * Initialize analytics tracking
 * Call this once when the page loads
 */
export function initAnalytics(): void {
  // Prevent double initialization
  if (isInitialized) {
    console.log('[Analytics] ⚠️ Already initialized, skipping...');
    return;
  }
  
  if (typeof window === 'undefined') {
    console.log('[Analytics] ⚠️ Not in browser environment, skipping...');
    return;
  }

  console.log('[Analytics] 🚀 Initializing tracking for:', LEAD_MAGNET_SLUG);

  // Record page load time
  pageLoadTime = Date.now();

  // Parse URL parameters
  const urlParams = getUrlParams();
  trackingData = {
    ...urlParams,
    device_type: getDeviceType(),
  };

  console.log('[Analytics] 📋 Tracking data initialized:', {
    id: trackingData.id || '(none)',
    utm_source: trackingData.utm_source || '(none)',
    utm_medium: trackingData.utm_medium || '(none)',
    utm_campaign: trackingData.utm_campaign || '(none)',
    utm_content: trackingData.utm_content || '(none)',
    device_type: trackingData.device_type,
    lead_magnet_slug: LEAD_MAGNET_SLUG,
  });

  // Set up scroll tracking (throttled)
  let scrollTimeout: NodeJS.Timeout | null = null;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      handleScroll();
      scrollTimeout = null;
    }, 100); // Throttle to 100ms
  }, { passive: true });

  // Set up multiple exit detection methods for maximum reliability:
  
  // 1. beforeunload - fires when page is actually closing
  window.addEventListener('beforeunload', handlePageExit);
  
  // 2. pagehide - more reliable on iOS Safari
  window.addEventListener('pagehide', handlePageHide);
  
  // 3. visibilitychange - fires when tab switches (most reliable for tab switches)
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // 4. blur/focus - additional fallback for some browsers
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('focus', handleWindowFocus);

  // Send page_open event
  sendTrackingEvent('page_open');
  
  // Start heartbeat pings (every 60 seconds while page is visible)
  startHeartbeat();

  isInitialized = true;
  console.log('[Analytics] ✅ Tracking initialized with heartbeat + multi-event exit detection!');
}

/**
 * Cleanup function - remove event listeners
 * Call this when component unmounts
 */
export function cleanupAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  console.log('[Analytics] 🧹 Cleaning up...');
  
  // Stop heartbeat
  stopHeartbeat();
  
  // Remove all event listeners
  window.removeEventListener('beforeunload', handlePageExit);
  window.removeEventListener('pagehide', handlePageHide);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  window.removeEventListener('blur', handleWindowBlur);
  window.removeEventListener('focus', handleWindowFocus);
  
  // Send final exit event on cleanup (if not already sent)
  if (isInitialized && !hasPageExitFired) {
    sendTrackingEvent('page_exit');
  }
  
  // Reset state
  isInitialized = false;
  hasPageExitFired = false;
}

/**
 * Manually trigger a tracking event (for testing)
 */
export function debugSendEvent(eventType: 'page_open' | 'page_exit' | 'heartbeat' | 'tab_hidden' | 'tab_visible'): void {
  console.log('[Analytics] 🔧 Debug: manually triggering event...');
  sendTrackingEvent(eventType);
}

/**
 * Get current tracking state (for debugging)
 */
export function debugGetState(): object {
  return {
    isInitialized,
    pageLoadTime,
    timeOnPage: getTimeOnPage(),
    maxScrollPercent,
    trackingData,
    currentScrollPercent: calculateScrollPercent(),
    lead_magnet_slug: LEAD_MAGNET_SLUG,
    hasPageExitFired,
    heartbeatRunning: heartbeatInterval !== null,
    visibilityState: typeof document !== 'undefined' ? document.visibilityState : 'unknown',
  };
}

