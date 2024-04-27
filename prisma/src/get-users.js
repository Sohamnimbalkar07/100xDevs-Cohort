const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
exports.prisma = prisma;

const getUsers = async () => {
    return await prisma.user.findMany({
        where: {
            email : 'sohamnimbalkar07@gmail.com'
        },
        include: {
            posts: true
        }
    })
};

const getUser = async () => {
    return await prisma.user.findUnique({
        where: {
            email : 'sohamnimbalkar07@gmail.com'
        },
        select: {
            id: true,
            email: true,
            name: true,
            posts: true
        }
    })
}

async function main() {
    
    // const users = await getUsers();
    // console.log(users);
    // console.log(users[0].posts)
    const user = await getUser();
    console.log(user);
    
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