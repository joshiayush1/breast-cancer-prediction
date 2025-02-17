import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Predict from '../components/Prediction/Prediction'
import Contact from '../components/Contact/Contact'

const PredictionPage = () => {
  return (
    <>
        <Navbar />
        <Predict />
        <Contact />
    </>
  )
}

export default PredictionPage