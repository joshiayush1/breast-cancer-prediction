import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Data_privacy from '../components/Questions/Data_privacy'
import Footer from '../components/Contact/Contact'
import ScrollToTop from "../ScrollToTop"

const Q1 = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Data_privacy />
    <Footer />
    </>
  )
}

export default Q1