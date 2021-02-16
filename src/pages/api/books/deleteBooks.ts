import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function deleteUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query

  if (method === 'DELETE') {
    await prisma.books.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(200).send('')
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
