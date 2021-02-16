import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function putBooks(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req
  const { id } = req.query
  const {
    title,
    company,
    author,
    publicationDate,
    category,
    image,
    situation
  } = req.body

  if (method === 'PUT') {
    const book = await prisma.books.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (book) {
      const editedBook = await prisma.books.update({
        where: {
          id: Number(book?.id)
        },
        data: {
          title: title || book.title,
          company: company || book.company,
          author: author || book.author,
          publicationDate: publicationDate || book.publicationDate,
          category: category || book.category,
          image: image || book.image,
          situation: situation || book.situation
        }
      })

      res.status(200).json(editedBook)
    } else {
      res.status(401).json({ msg: 'Not found id' })
    }
  } else {
    res.status(505).json({ msg: 'Method not supported' })
  }
}
