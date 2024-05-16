const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

    await prisma.$transaction([
        prisma.user.create({
           data: {
            email: 'mohitbobade@gmail.com',
            name: 'mohit bobade'
           }
        }),
        prisma.user.create({
            data: {
                email: 'sohamnimbalkar123@gmail.com',
                name: 'Soham nimbalkar'
            }
        })
      ])
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