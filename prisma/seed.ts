import { PrismaClient, AccountType } from '../generated/prisma/index.js'
const prisma = new PrismaClient()

async function main() {
  const cash = await prisma.account.upsert({
    where: { code: '1000' },
    update: {},
    create: {
      code: '1000',
      name: 'Cash',
      type: AccountType.ASSET,
    },
  })

  const revenue = await prisma.account.upsert({
    where: { code: '4000' },
    update: {},
    create: {
      code: '4000',
      name: 'Sales Revenue',
      type: AccountType.REVENUE,
    },
  })

  await prisma.journalEntry.create({
    data: {
      date: new Date(),
      description: 'Initial Seed Sale',
      status: 'PENDING',
      lines: {
        create: [
          { accountId: cash.id, amount: 500, isDebit: true },
          { accountId: revenue.id, amount: 500, isDebit: false },
        ]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
