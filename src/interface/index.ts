export interface UserInterface {
  id?: number
  userId: string
  name: string
  email: string
  phone: string
  city: string
  uf: string
  image?: string
}

export interface BookInterface {
  id?: number
  title: string
  ownerId: number
  company: string
  author: string
  publicationDate: string
  category: string
  image: string
  situation: string
}

export interface Props {
  response: Array<UserInterface>
  books: Array<BookInterface>
}

export interface Propsbook {
  response: BookInterface
}

export interface StaticProps {
  props: {
    response: Array<Props>
    books: Array<Props>
  }
  revalidate: number
}

export interface PropsEdit {
  props: {
    response: Array<Props>
  }
  revalidate: number
}

export interface StaticPropsBook {
  props: {
    response: Array<Props>
    user: Array<Props>
  }
  revalidate: number
}
