import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Partner } from './components/Partner/Partner'

import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
  return (
    <>

      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Partner></Partner>
      <Footer></Footer>

    </>
  )
}

