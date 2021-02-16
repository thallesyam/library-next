import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function putUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query
  const { name, phone, city, uf, image } = req.body

  if (method === 'PUT') {
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (user) {
      const editedUser = await prisma.users.update({
        where: {
          id: Number(user?.id)
        },
        data: {
          name: name || user?.name,
          phone: phone || user?.phone,
          city: city || user?.city,
          uf: uf || user?.uf,
          image: image || user?.image
        }
      })

      res.status(200).json(editedUser)
    } else {
      res.status(401).json({ msg: 'Not found id' })
    }
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
