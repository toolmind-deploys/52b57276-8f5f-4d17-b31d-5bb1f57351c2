import { NextResponse } from 'next/server';

export async function GET() {
  // Return a simple JSON with placeholder data
  return NextResponse.json({
    message: 'Placeholder data from buildtimeerror API.',
    data: {
      sample: 'Hello World!',
    },
  });
}
