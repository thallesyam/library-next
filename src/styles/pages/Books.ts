import styled from 'styled-components'
import svgOpenBook from '../../public/open-book.svg'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  position: relative;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 2rem;

    @media screen and (max-width: 525px) {
      flex-direction: column;
      padding: 1rem 1rem;
    }
  }
`

export const OpenBook = styled(svgOpenBook)`
  width: 100%;
  max-width: 100px;
  height: 100px;

  margin-right: 2rem;

  @media screen and (max-width: 260px) {
    display: none;
  }
`
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;

    @media screen and (max-width: 260px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 525px) {
    margin-bottom: 1rem;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;

  button:nth-child(1) {
    margin-right: 1rem;
    border: 1px solid green;
    color: green;
  }

  button:nth-child(2) {
    border: 1px solid red;
    color: red;
  }

  button {
    cursor: pointer;

    width: 100px;
    height: 70px;

    transition: 0.2s;

    background-color: white;

    border-radius: 8px;

    outline: none;

    font-size: 1.5rem;

    &:hover {
      opacity: 0.7;
    }
  }
`
export const ContainerBooks = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  padding: 1rem 2rem;

  width: 100%;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContainerBook = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;

  border-radius: 8px;

  padding: 15px 10px;

  h1,
  h2 {
    font-size: 17px;
    margin-bottom: 15px;
  }
`

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 40px;

    transition: 0.2s;

    background-color: white;

    border-radius: 8px;

    outline: none;

    font-size: 1rem;

    text-decoration: none;

    margin-right: 1rem;
    border: 1px solid green;
    color: green;
    &:hover {
      opacity: 0.7;
    }
  }
`

export const Modal = styled.div`
  width: 70%;
  height: 60%;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;

  text-align: center;

  transform: translate(-50%, -50%);

  background-color: #f0f0f0;
  border: 1px solid black;

  position: absolute;

  padding: 5rem 2rem;

  section {
    width: 100%;

    p {
      position: absolute;
      right: 20px;
      top: 20px;

      font-size: 1.7rem;

      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  form {
    width: 80%;
    margin: 20px auto;

    > div {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr;
    }

    input {
      width: 100%;
      max-width: 900px;
      border-radius: 4px;
      height: 50px;
      margin-bottom: 15px;

      padding: 0 1.5rem;
    }

    button {
      width: 100%;
      max-width: 900px;

      height: 60px;
      border-radius: 8px;
      cursor: pointer;

      transition: 0.2s;
      &:hover {
        opacity: 0.9;
      }

      background-color: green;

      font-size: 1.2rem;
      color: #fff;
    }
  }
`
