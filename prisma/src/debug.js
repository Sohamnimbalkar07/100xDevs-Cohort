const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      }
    ]
  })

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

prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  })

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })