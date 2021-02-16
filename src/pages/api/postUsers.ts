import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { UserInterface } from '../../interface'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { name, email, phone, city, uf, image } = req.body

  const user: UserInterface = {
    name,
    email,
    phone,
    city,
    uf,
    image
  }

  const data = await prisma.users.create({
    data: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      uf: user.uf,
      image: user.image
    }
  })

  switch (method) {
    case 'POST':
      res.status(200).json({ data })
      break

    default:
      res.status(501).json({ msg: 'Method not supported' })
      break
  }
}
