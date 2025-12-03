import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to track page events
export async function trackEvent(eventData: {
  event_type: string;
  page_url: string;
  visitor_id?: string;
  metadata?: Record<string, unknown>;
}) {
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

