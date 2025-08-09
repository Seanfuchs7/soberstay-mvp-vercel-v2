
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.firstName || !body.lastName || !body.email || !body.facilityId) {
    return new NextResponse('Missing required fields', { status: 400 });
  }

  const application = await prisma.application.create({
    data: {
      facilityId: Number(body.facilityId),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone ?? '',
      dob: new Date(body.dob),
      desiredMoveIn: new Date(body.desiredMoveIn),
      emergencyName: body.emergencyName ?? '',
      emergencyPhone: body.emergencyPhone ?? '',
      emergencyRelation: body.emergencyRelation ?? '',
      sobrietyDate: new Date(body.sobrietyDate),
      daysSober: Number(body.daysSober ?? 0),
      program: body.program ?? '',
      programName: body.programName ?? null,
      story: body.story ?? '',
      sponsorStatus: body.sponsorStatus ?? '',
      employment: body.employment ?? ''
    }
  });

  return NextResponse.json({ id: application.id, status: 'submitted', payment: 'pre-authorized (demo)' });
}
