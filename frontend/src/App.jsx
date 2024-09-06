import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from "./components/About/About"
import History from "./components/History/History"
import Articles from './components/Articles/Articles'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <History />
    <Articles />
    </>
  )
}

export default App