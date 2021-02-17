import styled, { css } from 'styled-components'
import { FiLogIn } from 'react-icons/fi'

import svgOpenBook from '../../public/open-book.svg'

const flexSet = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;

  ${flexSet}
`

export const ContainerLogin = styled.section`
  width: 50%;
  max-width: 500px;
  height: 70%;
  max-height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 50px;

  padding: 0 0 0 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }

  form {
    input {
      width: 100%;
      max-width: 320px;
      height: 50px;

      padding: 0 1rem;

      border-radius: 8px;

      border: 1px solid #c4c4c4;

      margin-bottom: 1.3rem;

      &::placeholder {
        font-size: 1rem;
        color: #000;
      }
    }

    button {
      width: 100%;
      max-width: 320px;
      height: 50px;

      padding: 0 1rem;

      border-radius: 8px;

      background-color: #c60436;
      border: none;

      font-size: 1rem;
      color: #fff;

      cursor: pointer;

      transition: 0.2s;

      margin-bottom: 2.5rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`

export const OpenBook = styled(svgOpenBook)`
  width: 100%;
  max-width: 200px;
  height: 200px;

  margin-bottom: 8rem;
`
export const Register = styled(FiLogIn)`
  width: 2rem;
  height: 1.5rem;
  margin-right: 10px;
`

export const ContainerImage = styled.section`
  width: 50%;
  max-width: 700px;
  height: 70%;
  max-height: 800px;

  padding: 0 3rem 0 0;

  ${flexSet}

  svg {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
