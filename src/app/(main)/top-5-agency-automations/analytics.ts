'use client';

// ============================================
// Landing Page Analytics Tracking Script
// Tracks: User ID, UTM params, time on page, scroll depth, device type
// Sends data to N8N webhook on page load and page exit
// ============================================

// Using local API proxy to bypass ad blockers
const WEBHOOK_URL = '/api/track';

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
  event_type: 'page_open' | 'page_exit';
  timestamp: string;
  page_url: string;
}

// ============================================
// State Variables
// ============================================

let pageLoadTime: number = 0;
let maxScrollPercent: number = 0;
let trackingData: Partial<TrackingData> = {};
let isInitialized: boolean = false;

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
function sendTrackingEvent(eventType: 'page_open' | 'page_exit'): boolean {
  const payload: TrackingData = {
    id: trackingData.id || null,
    utm_source: trackingData.utm_source || null,
    utm_medium: trackingData.utm_medium || null,
    utm_campaign: trackingData.utm_campaign || null,
    utm_content: trackingData.utm_content || null,
    time_on_page_seconds: eventType === 'page_open' ? 0 : getTimeOnPage(),
    max_scroll_percent: eventType === 'page_open' ? 0 : maxScrollPercent,
    device_type: trackingData.device_type || 'desktop',
    event_type: eventType,
    timestamp: getTimestamp(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  };

  console.log(`[Analytics] 📊 Sending ${eventType} event:`, payload);

  try {
    // Use sendBeacon for reliability (especially on page close)
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      const success = navigator.sendBeacon(WEBHOOK_URL, blob);
      
      if (success) {
        console.log(`[Analytics] ✅ ${eventType} event sent successfully via sendBeacon`);
      } else {
        console.warn(`[Analytics] ⚠️ sendBeacon returned false, trying fetch...`);
        // Fallback to fetch
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(err => console.error('[Analytics] ❌ Fetch fallback failed:', err));
      }
      return success;
    } else {
      // Fallback for browsers without sendBeacon
      console.log('[Analytics] 📡 sendBeacon not available, using fetch...');
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
  console.log('[Analytics] 👋 Page exit detected, sending final tracking data...');
  sendTrackingEvent('page_exit');
}

/**
 * Handle visibility change (for mobile tab switching)
 */
function handleVisibilityChange(): void {
  if (document.visibilityState === 'hidden') {
    console.log('[Analytics] 👁️ Page hidden, sending tracking data...');
    sendTrackingEvent('page_exit');
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

  console.log('[Analytics] 🚀 Initializing tracking...');

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

  // Set up page exit tracking
  window.addEventListener('beforeunload', handlePageExit);
  
  // Also track visibility change (handles mobile tab switching)
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Send page_open event
  sendTrackingEvent('page_open');

  isInitialized = true;
  console.log('[Analytics] ✅ Tracking initialized successfully!');
}

/**
 * Cleanup function - remove event listeners
 * Call this when component unmounts
 */
export function cleanupAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  console.log('[Analytics] 🧹 Cleaning up...');
  
  window.removeEventListener('beforeunload', handlePageExit);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  
  // Send final exit event on cleanup
  if (isInitialized) {
    sendTrackingEvent('page_exit');
  }
  
  isInitialized = false;
}

/**
 * Manually trigger a tracking event (for testing)
 */
export function debugSendEvent(eventType: 'page_open' | 'page_exit'): void {
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
  };
}

