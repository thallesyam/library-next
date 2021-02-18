import styled, { css } from 'styled-components'

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

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`

export const ContainerInfo = styled.section`
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

  h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }

  b {
    margin: 15px 0;
    font-weight: 700;
  }

  div:nth-child(1) {
    a {
      color: #000;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    padding: 0 0 0 0rem;
    max-width: 100%;
  }
`

export const ContainerImage = styled.section`
  width: 50%;
  max-width: 500px;
  height: 70%;
  max-height: 800px;

  padding: 0 0 0 1rem;

  ${flexSet}

  svg {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
`

export const ContainerWhatsapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #fff;
    width: 120px;
    height: 50px;
    background-color: green;
    margin-top: 20px;
    border-radius: 8px;

    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  button:nth-child(1) {
    margin-right: 1rem;
    border: 1px solid yellow;
    color: yellow;
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

    font-size: 1rem;

    &:hover {
      opacity: 0.7;
    }
    span {
      margin-left: 10px;
    }
  }
`
