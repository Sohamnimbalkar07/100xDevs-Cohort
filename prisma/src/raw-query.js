const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

    // const result = await prisma.$queryRaw`SELECT * FROM User`;
    // console.log(result);

    const email = 'sohamnimbalkar@gmail.com'
    const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`
    console.log(result);
    
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