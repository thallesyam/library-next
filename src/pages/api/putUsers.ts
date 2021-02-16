import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query
  const { name, email, phone, city, uf, image } = req.body

  const user = await prisma.users.findUnique({
    where: {
      id: Number(id)
    }
  })

  const newUser = {
    name: name || user?.name,
    email: email || user?.email,
    phone: phone || user?.phone,
    city: city || user?.city,
    uf: uf || user?.uf,
    image: image || user?.image
  }

  const editedUser = await prisma.users.update({
    where: {
      id: Number(user?.id)
    },
    data: newUser
  })

  switch (method) {
    case 'PUT':
      res.status(200).json(editedUser)
      break

    default:
      res.status(501).json({ msg: 'Method not supported' })
      break
  }
}
