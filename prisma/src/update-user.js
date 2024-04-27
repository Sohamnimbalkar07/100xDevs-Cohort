const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

const updateUser = async () => {
    await prisma.user.update({
       where: {
        email: 'sohamnimbalkar07@gmail.com'
       },
       data: {
        name: 'Nimbalkar Soham'
       }
    })
}

async function main() {
    
    updateUser();
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