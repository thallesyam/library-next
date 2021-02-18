import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import axios from 'axios'

import {
  Container,
  ContainerLogin,
  ContainerImage,
  Register,
  OpenBook
} from '../styles/pages/Home'

import Studying from '../public/studying.svg'
import { UserInterface } from '../interface'

const Home = (): JSX.Element => {
  const [notUser, setNotUser] = useState(false)
  const [emptyUser, setEmptyUser] = useState(false)
  const [textUser, setTextUser] = useState('')
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (textUser) {
      const request = await axios.get<UserInterface>(
        `${process.env.BASEURL}/users/getUser?id=${textUser}`
      )

      const {
        data: { name, userId, id }
      } = await request

      if (name && userId) {
        localStorage.setItem('username', name)
        localStorage.setItem('userId', userId)
        localStorage.setItem('id', JSON.stringify(id))
        setNotUser(false)
        router.push(`/${userId}`)
      } else {
        setNotUser(true)
      }

      setEmptyUser(false)
    } else {
      setEmptyUser(true)
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <OpenBook />
        <h1>Faça seu Login</h1>

        <form onSubmit={handleSubmit}>
          {emptyUser && <p>O campo não pode ser vazio</p>}
          {notUser && <p>ID inválido, por favor digite um id valido</p>}
          <input
            type="text"
            placeholder="Save Me"
            onChange={e => setTextUser(e.target.value)}
            value={textUser}
          />

          <br />
          <button type="submit">Enviar</button>
        </form>

        <Link href="/register">
          <a>
            <Register />
            <span>Não tenho cadastro</span>
          </a>
        </Link>
      </ContainerLogin>

      <ContainerImage>
        <Studying />
      </ContainerImage>
    </Container>
  )
}

export default Home
