import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

import {
  Container,
  ContainerLogin,
  ContainerImage
} from '../../styles/pages/Edit'

import Reading from '../../public/reading.svg'
import validate from '../../utils/validateInput'
import { BookInterface, Propsbook, PropsEdit } from '../../interface/index'
import { GetStaticPropsContext } from 'next'

const Edit = ({ response }: Propsbook): JSX.Element => {
  const [emptyTitle, setEmptyTitle] = useState(false)
  const [emptyCompany, setEmptyCompany] = useState(false)
  const [emptyAuthor, setEmptyAuthor] = useState(false)
  const [emptyPublicationDate, setEmptyPublicationDate] = useState(false)
  const [emptyCategory, setEmptyCategory] = useState(false)
  const [emptySituation, setEmptySituation] = useState(false)

  const [title, setTitle] = useState(response.title)
  const [company, setCompany] = useState(response.company)
  const [author, setAuthor] = useState(response.author)
  const [publicationDate, setPublicationDate] = useState(
    response.publicationDate
  )
  const [category, setCategory] = useState(response.category)
  const [image, setImage] = useState(response.image)
  const [situation, setSituation] = useState(response.situation)

  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    validate(title, setEmptyTitle)
    validate(company, setEmptyCompany)
    validate(author, setEmptyAuthor)
    validate(publicationDate, setEmptyPublicationDate)
    validate(category, setEmptyCategory)
    validate(situation, setEmptySituation)

    if (
      title &&
      company &&
      author &&
      publicationDate &&
      category &&
      situation
    ) {
      const book = {
        title,
        ownerId: Number(localStorage.getItem('id')),
        company,
        author,
        publicationDate,
        category,
        image,
        situation
      }

      const request = await axios.put(
        `${process.env.BASEURL}/books/putBooks?id=${response.id}`,
        book
      )

      const { status, data } = request
      if (status === 200) {
        setTitle('')
        setCompany('')
        setAuthor('')
        setPublicationDate('')
        setCategory('')
        setImage('')
        setSituation('')

        router.push('/')
      }

      console.log(data)
    }
  }

  return (
    <Container>
      <ContainerImage>
        <Reading />
      </ContainerImage>

      <ContainerLogin>
        <h1>Crie sua conta</h1>
        <h2>E venha conosco explorar esse gigantesco universo literário</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Coloque o link da sua imagem"
              onChange={e => setImage(e.target.value)}
              value={image}
            />
          </div>
          <div>
            {emptyTitle && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite o titulo"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            {emptyCompany && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite a Editora"
              onChange={e => setCompany(e.target.value)}
              value={company}
            />
          </div>
          <div>
            {emptyAuthor && <p>O campo não pode ser vazio</p>}
            <input
              type="password"
              placeholder="Digite o Autor"
              onChange={e => setAuthor(e.target.value)}
              value={author}
            />
          </div>
          <div>
            {emptyPublicationDate && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite a data de publicação"
              onChange={e => setPublicationDate(e.target.value)}
              value={publicationDate}
            />
          </div>
          <div>
            {emptyCategory && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite a Categoria"
              onChange={e => setCategory(e.target.value)}
              value={category}
            />
            {emptySituation && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="UF"
              onChange={e => setSituation(e.target.value)}
              value={situation}
            />
          </div>

          <br />
          <button data-cy="submit" type="submit">
            Enviar
          </button>
        </form>
      </ContainerLogin>
    </Container>
  )
}

export async function getStaticPaths(): Promise<{
  paths: number
  fallback: boolean
}> {
  const request = await axios.get(`${process.env.BASEURL}/books/getBooks`)

  const response = await request.data

  const paths = response.map((item: BookInterface) => {
    return { params: { id: String(item.id) } }
  })

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({
  params
}: GetStaticPropsContext): Promise<PropsEdit> {
  const request = await axios.get(
    `${process.env.BASEURL}/books/getBook?id=${params?.id}`
  )
  const response = await request.data

  return {
    props: {
      response
    },
    revalidate: 1
  }
}
export default Edit
