import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    connection: 'testing...',
    leads_final_table: 'checking...',
  };

  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      connection: 'NOT_CONFIGURED',
      message: 'Supabase environment variables are not set. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.',
    }, { status: 200 });
  }

  try {
    // Test 1: Basic connection by listing tables
    const { error: tablesError } = await supabase
      .from('leads_final')
      .select('*', { count: 'exact', head: true });

    if (tablesError) {
      results.leads_final_table = {
        exists: false,
        error: tablesError.message,
        hint: tablesError.hint || 'Table may not exist or RLS policy blocking access',
      };
    } else {
      results.leads_final_table = {
        exists: true,
        message: 'Successfully connected to leads_final table!',
      };
    }

    // Test 2: Try to count rows in leads_final table
    const { count, error: countError } = await supabase
      .from('leads_final')
      .select('*', { count: 'exact', head: true });

    if (!countError) {
      results.leads_final_count = count;
    }

    // Test 3: Get sample data from leads_final (first 5 rows)
    const { data: sampleData, error: sampleError } = await supabase
      .from('leads_final')
      .select('*')
      .limit(5);

    if (!sampleError && sampleData) {
      results.sample_leads_final = sampleData;
      results.columns = sampleData.length > 0 ? Object.keys(sampleData[0]) : [];
    }

    results.connection = 'SUCCESS';
    
  } catch (err) {
    results.connection = 'FAILED';
    results.error = err instanceof Error ? err.message : 'Unknown error';
  }

  return NextResponse.json(results, { status: 200 });
}

