const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

//select * from post offset 0 limit 10
//select * from post offset 10 limit 10
//select * from post offset 20 limit 10
const getPosts = async () => {
    return await prisma.post.findMany({
        take:2,  //limit
        skip:2 //offset
    })
}

async function main() {
    
    const posts = await getPosts();
    console.log(posts);
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