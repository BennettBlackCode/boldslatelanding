import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if env vars are present (allows build without Supabase)
export const supabase: SupabaseClient | null = 
  supabaseUrl && supabaseAnonKey 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Check if Supabase is configured
export const isSupabaseConfigured = () => !!supabase;

// Helper function to track page events
export async function trackEvent(eventData: {
  event_type: string;
  page_url: string;
  visitor_id?: string;
  metadata?: Record<string, unknown>;
}) {
  if (!supabase) {
    console.warn('Supabase not configured - skipping event tracking');
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { error } = await supabase
      .from('page_events')
      .insert([{
        ...eventData,
        created_at: new Date().toISOString(),
      }]);
    
    if (error) {
      console.error('Error tracking event:', error);
      return { success: false, error };
    }
    
    return { success: true };
  } catch (err) {
    console.error('Error tracking event:', err);
    return { success: false, error: err };
  }
}

