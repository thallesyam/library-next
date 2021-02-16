import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query

  await prisma.users.delete({
    where: {
      id: Number(id)
    }
  })

  switch (method) {
    case 'DELETE':
      res.status(200).send('')
      break

    default:
      res.status(501).json({ msg: 'Method not supported' })
      break
  }
}
