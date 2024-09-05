import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <section className='w-screen h-[84vh] flex'>
        <div className='h-full w-1/2 heroLeft border border-green-300 flex flex-col justify-center px-20'>
        <h1 className='text-4xl tracking-tighter font-semibold text-stone-700 text-wrap leading-tight'> <span className='text-[#072AC8]'>Don’t let</span> breast cancer take away the motivation to achieve your dreams .</h1>
        <span className='text-4xl tracking-tighter font-semibold text-stone-700  text-wrap leading-tight text-end'>- Diana Cohen</span>
        <p className='mt-5 text-xs text-stone-700 opacity-50 font-bold'>In the fight against breast cancer, your courage is your greatest weapon. Keep pushing forward, for each battle won brings you closer to healing.</p>
        <button className='bg-[#072AC8] text-white h-12 w-60 rounded-lg flex justify-center items-center mt-10'>Start Prediction <FaArrowRightLong className='ml-8 text-xl'/></button>
        </div>  
        <div className='h-full w-1/2 heroRight border border-blue-300'>
            
        </div>
    </section>
  )
}

export default Home