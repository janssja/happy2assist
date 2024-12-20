import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, language } = await request.json();

    const response = await fetch('http://localhost:8000/api/waitlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, language }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.email?.[0] || 'Failed to add to waitlist' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
} 