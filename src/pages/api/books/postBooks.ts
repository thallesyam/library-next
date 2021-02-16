import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { BookInterface } from '../../../interface'

const prisma = new PrismaClient()

export default async function postBooks(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const {
    title,
    ownerId,
    company,
    author,
    publicationDate,
    category,
    image,
    situation
  } = req.body

  if (method === 'POST') {
    const book: BookInterface = {
      title,
      ownerId,
      company,
      author,
      publicationDate,
      category,
      image,
      situation
    }

    const data = await prisma.books.create({
      data: {
        ownerId: book.ownerId,
        title: book.title,
        company: book.company,
        author: book.author,
        publicationDate: book.publicationDate,
        category: book.category,
        image: book.image,
        situation: book.situation
      }
    })

    res.status(200).json({ data })
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
