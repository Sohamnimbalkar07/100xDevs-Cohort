const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

const filter = async ()=> {
    return await prisma.user.findMany({
        where: {
            email: {
                endsWith: 'gmail.com'
            },
            posts: {
                //has atleast one post publish
                some: {
                    published: true,
                }
            }
        },
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    })
}

async function main() {
    
    const user = await filter();
    console.log(user);
    console.log(user[0].posts)
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