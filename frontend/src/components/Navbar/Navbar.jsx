import React, { useState } from 'react'
import hamburgerMenu from "../../assets/bars-solid.svg"

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header>
    <nav className='w-screen h-28 no-underline flex items-center justify-between'>
        <div className='navLeft w-1/2 h-full sm:pl-20 pl-5 flex items-center'>
        <ul>
            <li className='text-3xl font-bold tracking-tighter text-[#072AC8]'><a href="">BreastCare</a></li>
        </ul>
        </div>

        <div className='hamburgermenu sm:hidden w-1/2 h-full flex items-center justify-end pr-10'>
            <button onClick={toggleMenu} className='relative'><img src={hamburgerMenu} alt="Menu" className='w-7 h-7'/></button>
        </div>

        {isOpen && (
          <div className='absolute w-48 h-50 mr-10 mt-60 right-0 drop-shadow-md bg-white'>
            <ul className='w-full h-full'>
                <li className='h-10 w-full pl-4 mt-3'><a href="">Home</a></li>
                <li className='h-10 w-full pl-4'><a href="">About BreastCare</a></li>
                <li className='h-10 w-full pl-4'><a href="">Articles</a></li>
                <li className='h-10 w-full pl-4'><a href="">FAQ</a></li>
                <li className='h-10 w-full pl-4'><a href="">Contact us</a></li>
            </ul>
          </div>   
        )}

        <div className='hidden navRight w-1/2 h-full flex sm:pr-20 pr-5'>
        <ul className='w-full sm:flex items-center justify-evenly'>
            <li><a href="">Home</a></li>
            <li><a href="">About BreastCare</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
        </div>
    </nav>
    </header>
  )
}

export default Navbar