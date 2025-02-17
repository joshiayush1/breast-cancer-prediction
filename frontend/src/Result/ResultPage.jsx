import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Result from "../components/Result/Result"
import Footer from "../components/Contact/Contact"
import ScrollToTop from '../ScrollToTop'

const ResultPage = () => {
  return (
    <>
        <ScrollToTop />
        <Navbar />
        <Result />
        <Footer />
    </>
  )
}

export default ResultPage