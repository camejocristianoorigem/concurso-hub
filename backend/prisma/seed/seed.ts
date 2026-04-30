import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.concurso.createMany({
    data: [
      {
        titulo: 'Analista de TI - TJSP',
        orgao: 'Tribunal de Justiça de São Paulo',
        banca: 'FGV',
        estado: 'SP',
        area: 'TI',
        cargo: 'Analista de TI',
        salario: 8500,
        vagas: 12,
        nivel: 'superior',
        status: 'aberto',
        dataPublicacao: new Date('2026-04-01'),
        dataInscricaoInicio: new Date('2026-04-10'),
        dataInscricaoFim: new Date('2026-05-10'),
        linkEdital: 'https://example.com/tjsp-edital',
      },
      {
        titulo: 'Técnico Administrativo - IFMG',
        orgao: 'Instituto Federal de Minas Gerais',
        banca: 'IBFC',
        estado: 'MG',
        area: 'Administrativa',
        cargo: 'Técnico Administrativo',
        salario: 4200,
        vagas: 30,
        nivel: 'medio',
        status: 'aberto',
        dataPublicacao: new Date('2026-03-20'),
        dataInscricaoInicio: new Date('2026-04-01'),
        dataInscricaoFim: new Date('2026-04-30'),
        linkEdital: 'https://example.com/ifmg-edital',
      }
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
