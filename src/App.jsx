import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Brands from './components/Brands'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Content></Content>
      <Brands></Brands>
      <Footer></Footer>
    </>
  )
}

export default App
