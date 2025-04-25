import { Hono, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const app = new Hono()

app.get('/', async (c) => {
 
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

  const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  await prisma.user.create({
    data: {
      name: "Soham",
      email: "sohamnimbalkar07@gmail.com",
      password: "password"
    }
  })
  
  return c.json({msg: "as"})
})

export default app