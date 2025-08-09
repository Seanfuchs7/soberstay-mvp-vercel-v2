
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { slug: string }}) {
  const facility = await prisma.facility.findUnique({ where: { slug: params.slug }});
  if (!facility) return new NextResponse('Not found', { status: 404 });
  return NextResponse.json(facility);
}
