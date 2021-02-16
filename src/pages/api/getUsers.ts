import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req

  const users = await prisma.users.findMany()

  switch (method) {
    case 'GET':
      res.status(200).json(users)
      break

    default:
      res.status(501).json({ msg: 'Method not supported' })
      break
  }
}
