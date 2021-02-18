import React, { useState, useEffect, FormEvent } from 'react'

import {
  Container,
  ContainerLogo,
  OpenBook,
  ButtonsContainer,
  ContainerBooks,
  ContainerBook,
  Btn,
  Modal
} from '../styles/pages/Books'

import { FiPower, FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import { UserInterface, StaticProps, BookInterface } from '../interface/index'
import { useRouter } from 'next/router'
import validate from '../utils/validateInput'

const Books = ({ response, books }: any): JSX.Element => {
  const [filteredBooks, setFilteredBooks] = useState([])
  const [modal, setModal] = useState(false)
  const [error, setError] = useState('')

  const [emptyTitle, setEmptyTitle] = useState(false)
  const [emptyCompany, setEmptyCompany] = useState(false)
  const [emptyAuthor, setEmptyAuthor] = useState(false)
  const [emptyPublicationDate, setEmptyPublicationDate] = useState(false)
  const [emptyCategory, setEmptyCategory] = useState(false)
  const [emptySituation, setEmptySituation] = useState(false)

  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [author, setAuthor] = useState('')
  const [publicationDate, setPublicationDate] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [situation, setSituation] = useState('')

  const router = useRouter()

  useEffect(() => {
    const bookFilter = books.filter((resp: BookInterface) => {
      return resp.ownerId === response.id
    })

    setFilteredBooks(bookFilter)
  }, [])

  function logout() {
    localStorage.clear()
    router.push('/')
  }

  function openModal() {
    setModal(!modal)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    validate(title, setEmptyTitle)
    validate(company, setEmptyCompany)
    validate(author, setEmptyAuthor)
    validate(publicationDate, setEmptyPublicationDate)
    validate(category, setEmptyCategory)
    validate(situation, setEmptySituation)

    if (!localStorage.getItem('id')) {
      setError(
        'Você não está logado, não sera possivel proseguir, você será redirecionado para se registrar'
      )

      setTimeout(() => {
        router.push('/register')
      }, 2000)
    } else {
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

        const request = await axios.post(
          `${process.env.BASEURL}/books/postBooks`,
          book
        )

        const { status } = request

        if (status === 200) {
          setModal(false)

          setTitle('')
          setCompany('')
          setAuthor('')
          setPublicationDate('')
          setCategory('')
          setImage('')
          setSituation('')
        }
      }
    }
  }

  return (
    <Container>
      <header>
        <ContainerLogo>
          <Link href="/">
            <a>
              <OpenBook />
            </a>
          </Link>
          <h1>Seja bem vindo Thalles Ian</h1>
        </ContainerLogo>
        <ButtonsContainer>
          <button onClick={openModal}>
            <FiPower />
          </button>
          <button onClick={logout}>
            <FiTrash2 />
          </button>
        </ButtonsContainer>
      </header>

      <ContainerBooks>
        {filteredBooks &&
          filteredBooks?.map((book: BookInterface) => (
            <ContainerBook key={book.id}>
              <h1>Título: {book.title}</h1>
              <h2>Autor: {book.author}</h2>
              <h2>Categoria: {book.category}</h2>
              <h2>
                <span>Company: {book.company}</span> |
                <span> Ano: {book.publicationDate}</span>
              </h2>
              <h2>Dono: {localStorage.getItem('username')}</h2>

              <Btn>
                <Link href={`/books/${book.id}`}>
                  <a>Visitar</a>
                </Link>
              </Btn>
            </ContainerBook>
          ))}
      </ContainerBooks>

      {modal && (
        <Modal>
          <section>
            <h1>Cadastre um Livro e faça alguém feliz</h1>
            <span>{error}</span>
            <p onClick={openModal}>X</p>

            <form onSubmit={handleSubmit}>
              {emptyTitle && <p>O campo não pode ser vazio</p>}

              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título do livro"
              />
              {emptyAuthor && <p>O campo não pode ser vazio</p>}
              <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Autor do livro"
              />
              {emptyCompany && <p>O campo não pode ser vazio</p>}

              <input
                type="text"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Categoria do livro"
              />

              <div>
                {emptyPublicationDate && <p>O campo não pode ser vazio</p>}

                <input
                  type="text"
                  value={publicationDate}
                  onChange={e => setPublicationDate(e.target.value)}
                  placeholder="Editora"
                />
                {emptyCategory && <p>O campo não pode ser vazio</p>}

                <input
                  type="text"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  placeholder="Ano de publicação"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  placeholder="Imagem do Livro"
                />
                {emptySituation && <p>O campo não pode ser vazio</p>}

                <input
                  type="text"
                  value={situation}
                  onChange={e => setSituation(e.target.value)}
                  placeholder="Situação do Livro"
                />
              </div>
              <button type="submit">Cadastrar Livro</button>
            </form>
          </section>
        </Modal>
      )}
    </Container>
  )
}

export async function getStaticPaths(): Promise<{
  paths: number
  fallback: boolean
}> {
  const request = await axios.get(`${process.env.BASEURL}/users/getUsers`)

  const response = await request.data

  const paths = response.map((item: UserInterface) => {
    return { params: { userId: item.userId } }
  })

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({
  params
}: GetStaticPropsContext): Promise<StaticProps> {
  const request = await axios.get(
    `${process.env.BASEURL}/users/getUser?id=${params?.userId}`
  )
  const response = await request.data

  const allBooks = await axios.get(`${process.env.BASEURL}/books/getBooks`)
  const books = await allBooks.data

  return {
    props: {
      response,
      books
    },
    revalidate: 1
  }
}

export default Books
