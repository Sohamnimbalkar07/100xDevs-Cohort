const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({ log: ['info', 'query'] });
//const prisma = new PrismaClient();
exports.prisma = prisma;

const createUser = async () => {
    await prisma.user.create({
        data: {
            name: 'Soham Nimbalkar',
            email: 'sohamnimbalkar07@gmail.com',
            posts: {
                create: { title: 'hello world!' }
            },
            profile: {
                create: { bio: 'I like coding' }
            }
        }
    }
    );
};

async function main() {
    
    await createUser();
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