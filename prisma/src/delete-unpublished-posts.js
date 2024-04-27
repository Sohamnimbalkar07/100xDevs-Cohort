const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

const deleteUnpublishedPosts = async () => {
    await prisma.user.update({
       where: {
        email: 'sohamnimbalkar07@gmail.com'
       },
       data : {
        posts: {
          deleteMany: {
            published: false
          }
        }
       }
    })
}

async function main() {
    
    deleteUnpublishedPosts();
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