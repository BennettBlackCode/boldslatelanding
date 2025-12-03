'use client';

import { useEffect } from 'react';
import { initAnalytics, cleanupAnalytics, debugGetState, debugSendEvent } from './analytics';

/**
 * Client component that initializes analytics tracking
 * Wrap your page content with this or include it as a child component
 */
export default function AnalyticsProvider({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    // Initialize analytics on mount
    initAnalytics();

    // Expose debug functions to window for console debugging
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).analyticsDebug = {
        getState: debugGetState,
        sendEvent: debugSendEvent,
      };
      console.log('[Analytics] 💡 Debug: Type analyticsDebug.getState() or analyticsDebug.sendEvent("page_exit") in console');
    }

    // Cleanup on unmount
    return () => {
      cleanupAnalytics();
    };
  }, []);

  return <>{children}</>;
}

