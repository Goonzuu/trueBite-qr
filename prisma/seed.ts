import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Crear un comercio de ejemplo
  const commerce = await prisma.commerce.create({
    data: {
      name: 'Restaurante Ejemplo',
      rut: '12345678-9',
      category: 'Restaurante',
      address: 'Av. Principal 123',
      city: 'Montevideo',
      status: 'approved',
      slug: 'restaurante-ejemplo',
    },
  });

  console.log('✅ Commerce created:', commerce);

  // Crear un voto de ejemplo
  const vote = await prisma.vote.create({
    data: {
      commerceId: commerce.id,
      deviceToken: 'device-token-ejemplo-123',
      serviceRating: 5,
      valueRating: 4,
      comment: 'Excelente servicio y buena relación precio-calidad',
    },
  });

  console.log('✅ Vote created:', vote);

  console.log('🎉 Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
