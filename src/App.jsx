import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import MainComp from './components/MainComp'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainComp />
      <Footer />
    </>
  )
}

export default App
