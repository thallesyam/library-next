export interface UserInterface {
  name: string
  email: string
  phone: string
  city: string
  uf: string
  image?: string
}

export interface BookInterface {
  title: string
  ownerId: number
  company: string
  author: string
  publicationDate: string
  category: string
  image: string
  situation: string
}
