import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.avrystroeve.com/webhook/landing-page-events';

export async function POST(request: NextRequest) {
  console.log('[Track API] ═══════════════════════════════════════');
  console.log('[Track API] 📥 Received tracking request');
  console.log('[Track API] Content-Type:', request.headers.get('content-type'));

  try {
    // Try to read the body - handle both JSON and text/plain from sendBeacon
    let body: Record<string, unknown>;
    
    const contentType = request.headers.get('content-type') || '';
    console.log('[Track API] 📋 Content-Type header:', contentType);
    
    // Try to get the raw text first
    const rawText = await request.text();
    console.log('[Track API] 📄 Raw body text:', rawText);
    console.log('[Track API] 📏 Body length:', rawText.length);
    
    if (!rawText || rawText.length === 0) {
      console.error('[Track API] ❌ Empty body received!');
      return NextResponse.json(
        { success: false, message: 'Empty body' },
        { status: 400 }
      );
    }
    
    // Parse the JSON
    try {
      body = JSON.parse(rawText);
      console.log('[Track API] ✅ Successfully parsed JSON');
    } catch (parseError) {
      console.error('[Track API] ❌ JSON parse error:', parseError);
      console.error('[Track API] Raw text was:', rawText.substring(0, 500));
      return NextResponse.json(
        { success: false, message: 'Invalid JSON' },
        { status: 400 }
      );
    }
    
    console.log('[Track API] 📊 Parsed payload:', JSON.stringify(body, null, 2));

    // Prepare the body to send to N8N
    const bodyToSend = JSON.stringify(body);
    console.log('[Track API] 📤 Sending to N8N:', bodyToSend);

    // Forward the exact JSON to N8N webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: bodyToSend,
    });

    const responseText = await response.text();
    
    console.log('[Track API] 📨 N8N Response Status:', response.status);
    console.log('[Track API] 📨 N8N Response Body:', responseText);
    console.log('[Track API] ✅ Successfully forwarded to N8N');
    console.log('[Track API] ═══════════════════════════════════════');

    // Return success response to browser
    return NextResponse.json(
      { success: true, message: 'Event tracked' },
      { status: 200 }
    );

  } catch (error) {
    // Log error but don't crash
    console.error('[Track API] ❌ Error:', error);
    console.log('[Track API] ═══════════════════════════════════════');
    
    // Still return success to browser (we don't want tracking errors to affect UX)
    return NextResponse.json(
      { success: false, message: 'Tracking error logged' },
      { status: 200 }
    );
  }
}

// Also handle OPTIONS for CORS preflight if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
