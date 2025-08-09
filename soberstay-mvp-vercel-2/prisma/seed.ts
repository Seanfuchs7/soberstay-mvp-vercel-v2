
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.facility.deleteMany();
  await prisma.facility.createMany({
    data: [
      {
        slug: 'serenity-haven',
        name: 'Serenity Haven Sober Living',
        city: 'Malibu',
        state: 'CA',
        priceMonthly: 2500,
        gender: "Men's only",
        level: 'Level III',
        bedsTotal: 6,
        bedsAvailable: 1,
        rating: 4.8,
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        verified: true
      },
      {
        slug: 'pacific-recovery',
        name: 'Pacific Recovery House',
        city: 'Santa Monica',
        state: 'CA',
        priceMonthly: 3200,
        gender: "Women's only",
        level: 'Level II',
        bedsTotal: 8,
        bedsAvailable: 2,
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=600&fit=crop',
        verified: true
      },
      {
        slug: 'hope-house',
        name: 'Hope House LA',
        city: 'Venice',
        state: 'CA',
        priceMonthly: 2200,
        gender: 'Co-ed',
        level: 'Level I',
        bedsTotal: 10,
        bedsAvailable: 3,
        rating: 4.6,
        imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&h=600&fit=crop',
        verified: true
      }
    ]
  });
  console.log('Seeded facilities.');
}

main().finally(async ()=> prisma.$disconnect());
