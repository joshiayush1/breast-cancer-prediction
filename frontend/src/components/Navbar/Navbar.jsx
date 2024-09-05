import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header>
    <nav className='w-screen h-[16vh] no-underline flex items-center justify-between'>
        <div className='navLeft w-1/2 h-full sm:pl-20 pl-5 flex items-center'>
        <ul>
            <li className='text-3xl font-semibold tracking-tighter text-[#072AC8]'><a href="">BreastCare</a></li>
        </ul>
        </div>

        <div className='hamburgermenu lg:hidden w-1/2 h-full flex items-center justify-end pr-10'>
            <button onClick={toggleMenu} className='relative'><AiOutlineMenu className='text-xl text-stone-700 '/></button>
        </div>

        {isOpen && (
          <div className='absolute w-48 h-50 mr-10 mt-60 right-0 drop-shadow-md bg-white'>
            <ul className='w-full h-full text-stone-700 '>
                <li className='h-10 w-full pl-4 mt-3'><a href="">Home</a></li>
                <li className='h-10 w-full pl-4'><a href="">About BreastCare</a></li>
                <li className='h-10 w-full pl-4'><a href="">Articles</a></li>
                <li className='h-10 w-full pl-4'><a href="">FAQ</a></li>
                <li className='h-10 w-full pl-4'><a href="">Contact us</a></li>
            </ul>
          </div>   
        )}

        <div className='lg:flex hidden navRight w-1/2 h-full sm:pr-20 pr-5'>
        <ul className='w-full lg:flex items-center justify-evenly text-stone-700 '>
            <li className='hover:text-stone-400'><a href="">Home</a></li>
            <li className='hover:text-stone-400'><a href="">About BreastCare</a></li>
            <li className='hover:text-stone-400'><a href="">Articles</a></li>
            <li className='hover:text-stone-400'><a href="">FAQ</a></li>
            <li className='hover:text-stone-400'><a href="">Contact us</a></li>
        </ul>
        </div>
    </nav>
    </header>
  )
}

export default Navbar