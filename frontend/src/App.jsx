import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from "./components/About/About"
import History from "./components/History/History"
import Articles from './components/Articles/Articles'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <History />
    <Articles />
    <Faq />
    <Contact />
    </>
  )
}

export default App