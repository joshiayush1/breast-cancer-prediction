import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Who_is_it_for from '../components/Questions/Who_is_it_for'
import Footer from '../components/Contact/Contact'
import ScrollToTop from "../ScrollToTop"

const Q1 = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Who_is_it_for />
    <Footer />
    </>
  )
}

export default Q1