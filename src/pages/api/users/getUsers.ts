import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req

  if (method === 'GET') {
    const users = await prisma.users.findMany()
    res.status(200).json(users)
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
