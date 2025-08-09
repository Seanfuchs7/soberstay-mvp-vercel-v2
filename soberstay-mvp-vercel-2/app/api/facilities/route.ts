
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const facilities = await prisma.facility.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(facilities);
}
