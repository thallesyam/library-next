import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { UserInterface } from '../../../interface'
import generateUniqueId from '../../../utils/generateRandomId'

const prisma = new PrismaClient()

export default async function postUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { name, email, phone, city, uf, image } = req.body

  const id = generateUniqueId()

  if (method === 'POST') {
    const user: UserInterface = {
      userId: id,
      name,
      email,
      phone,
      city,
      uf,
      image
    }

    const data = await prisma.users.create({
      data: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        uf: user.uf,
        image: user.image
      }
    })

    res.status(200).json({ data })
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
