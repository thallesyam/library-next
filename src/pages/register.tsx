import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

import {
  Container,
  ContainerLogin,
  ContainerImage
} from '../styles/pages/Register'

import Reading from '../public/reading.svg'
import formatSlug from '../utils/formatSlug'
import validate from '../utils/validateInput'
import { UserInterface } from '../interface/index'

const Register = (): JSX.Element => {
  const [emptyUser, setEmptyUser] = useState(false)
  const [emptyEmail, setEmptyEmail] = useState(false)
  const [emptyPassword, setEmptyPassword] = useState(false)
  const [emptyWhatsapp, setEmptyWhatsapp] = useState(false)
  const [emptyState, setEmptyState] = useState(false)
  const [emptyUf, setEmptyUf] = useState(false)

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    validate(name, setEmptyUser)
    validate(email, setEmptyEmail)
    validate(password, setEmptyPassword)
    validate(phone, setEmptyWhatsapp)
    validate(city, setEmptyState)
    validate(uf, setEmptyUf)

    if (name && email && password && phone && city && uf) {
      const data = {
        image,
        name,
        email,
        password,
        phone,
        city,
        uf
      }

      const request = await axios.post(
        `${process.env.BASEURL}/users/postUsers`,
        data
      )

      const {
        status,
        data: {
          data: { userId }
        }
      } = await request

      if (status === 200) {
        window.alert(`Anote o seu userId para logar: ${userId}`)
        return router.push('/')
      }
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
            {emptyUser && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            {emptyEmail && <p>O campo não pode ser vazio</p>}
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            {emptyPassword && <p>O campo não pode ser vazio</p>}
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            {emptyWhatsapp && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite seu whatsapp"
              onChange={e => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div>
            {emptyState && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="Digite sua cidade"
              onChange={e => setCity(e.target.value)}
              value={city}
            />
            {emptyUf && <p>O campo não pode ser vazio</p>}
            <input
              type="text"
              placeholder="UF"
              onChange={e => setUf(e.target.value)}
              value={uf}
            />
          </div>

          <br />
          <button type="submit">Enviar</button>
        </form>
      </ContainerLogin>
    </Container>
  )
}

export default Register
