
import { NextResponse } from 'next/server';

export async function POST() {
  // Mock response; in prod you'd use Stripe and Connect accounts here
  return NextResponse.json({ clientSecret: 'pi_test_secret_demo' });
}
