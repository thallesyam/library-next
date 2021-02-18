import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query

  if (method === 'GET') {
    const user = await prisma.users.findUnique({
      where: {
        userId: id
      }
    })

    res.status(200).json(user)
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
