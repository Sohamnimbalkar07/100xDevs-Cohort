const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

const createPost = async () => {
    await prisma.post.create({
        data: {
            title: 'title of post',
            content: 'content of post',
            //authorId: 3
            author: {
                connect: {
                    id:3
                }
            },
            
        }
    })
}

async function main() {
    
    createPost();
    //const allUsers = await prisma.user.findMany();
    //console.log(allUsers);

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