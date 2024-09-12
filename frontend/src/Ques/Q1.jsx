import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import What_is_breastcare from '../components/Questions/What_is_breastcare'
import Footer from '../components/Contact/Contact'
import ScrollToTop from "../ScrollToTop"

const Q1 = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <What_is_breastcare />
    <Footer />
    </>
  )
}

export default Q1