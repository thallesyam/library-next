import React from 'react'

import axios from 'axios'

import {
  Container,
  ContainerInfo,
  ContainerImage,
  ContainerWhatsapp,
  ButtonsContainer
} from '../../styles/pages/Book'

import { BookInterface } from '../../interface'
import { GetStaticPropsContext } from 'next'
import { StaticPropsBook } from '../../interface/index'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Book = ({ response, user }: any): JSX.Element => {
  const router = useRouter()
  async function handleDelete() {
    const request = await axios.delete(
      `${process.env.BASEURL}/books/deleteBooks?id=${response.id}`
    )
    if (request.status === 200) {
      router.push(`/${user[0].userId}`)
    }
  }
  async function handleUpdate() {}

  return (
    <Container>
      <ContainerImage>
        <img src={response.image} alt={response.title} />
      </ContainerImage>

      <ContainerInfo>
        <div>
          <Link href={`/${user[0].userId}`}>
            <a>Voltar para a o perfil</a>
          </Link>
        </div>
        <br />
        <h1>{response.title}</h1>

        <h2>Autor: {response.author}</h2>
        <h2>Editora: {response.company}</h2>
        <h2>Categoria: {response.category}</h2>
        <h2>Ano de publicação: {response.publicationDate}</h2>
        <h2>Situação: {response.situation}</h2>
        <br />
        <h2>Dono do Livro: {user[0].name}</h2>
        <b>
          Se preferir entrar em contato por email, <br /> encaminhe para:
        </b>
        <h2>{user[0].email}</h2>
        <b>Se optar pelo whatsapp, clique no link abaixo: </b>
        <ContainerWhatsapp>
          <Link
            href={`https://api.whatsapp.com/send?phone=55${user[0].phone}&text=Ol%C3%A1%20me%20interessei%20no%20livro.`}
          >
            <a>Whatsapp</a>
          </Link>
        </ContainerWhatsapp>
        <ButtonsContainer>
          <button onClick={handleUpdate}>
            <FiPower />
            <span>Editar</span>
          </button>
          <button onClick={handleDelete}>
            <FiTrash2 />
            <span>Deletar</span>
          </button>
        </ButtonsContainer>
      </ContainerInfo>
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
}: GetStaticPropsContext): Promise<StaticPropsBook> {
  const request = await axios.get(
    `${process.env.BASEURL}/books/getBook?id=${params?.id}`
  )
  const response = await request.data

  const allUsers = await axios.get(`${process.env.BASEURL}/users/getUsers`)
  const user = await allUsers.data

  return {
    props: {
      response,
      user
    },
    revalidate: 1
  }
}

export default Book
