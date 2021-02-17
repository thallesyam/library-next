import React from 'react'
import Link from 'next/link'

import {
  Container,
  ContainerLogin,
  ContainerImage,
  Register,
  OpenBook
} from '../styles/pages/Home'

import Studying from '../public/studying.svg'

const Home = (): JSX.Element => {
  return (
    <Container>
      <ContainerLogin>
        <OpenBook />
        <h1>Faça seu Login</h1>

        <form>
          <input type="text" placeholder="Save Me" />
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
