import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Why_breastcare from '../components/Questions/Why_breastcare'
import Footer from '../components/Contact/Contact'
import ScrollToTop from "../ScrollToTop"

const Q1 = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Why_breastcare />
    <Footer />
    </>
  )
}

export default Q1