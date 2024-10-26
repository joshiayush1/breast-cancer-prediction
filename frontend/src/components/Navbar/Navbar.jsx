import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll'; // if clicked on BreastCare at navigation <link> tag will not redirect you to / page beacuse link is already being used of react-scroll, you cant import another from react-router-dom 
// Link from react-router-dom redirects you to a page, without reloading, where a tag will reload

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className='w-screen h-[16vh] no-underline flex items-center justify-between'>
        <div className='navLeft w-1/2 h-full sm:pl-20 pl-5 flex items-center'>
          <ul>
            <li className='text-3xl font-semibold tracking-tighter text-[#072AC8] cursor-pointer'>
              <a href='/'>BreastCare</a>
            </li>
          </ul>
        </div>

        <div className='hamburgermenu lg:hidden w-1/2 h-full flex items-center justify-end pr-10'>
          <button onClick={toggleMenu} className='relative'>
            <AiOutlineMenu className='text-xl text-stone-700' />
          </button>
        </div>

        {isOpen && (
          <div className='absolute w-48 h-52 mr-10 mt-60 right-0 drop-shadow-md bg-white'>
            <ul className='w-full h-full text-stone-700 cursor-pointer'>
              <li className='h-10 w-full pl-4 mt-3'>
                <Link to="homeSection" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
              </li>
              <li className='h-10 w-full pl-4'>
                <Link to="aboutSection" smooth={true} duration={500} onClick={toggleMenu}>About BreastCare</Link>
              </li>
              <li className='h-10 w-full pl-4'>
                <Link to="articlesSection" smooth={true} duration={500} onClick={toggleMenu}>Articles</Link>
              </li>
              <li className='h-10 w-full pl-4'>
                <Link to="faqSection" smooth={true} duration={500} onClick={toggleMenu}>FAQ</Link>
              </li>
              <li className='h-10 w-full pl-4'>
                <Link to="contactSection" smooth={true} duration={500} onClick={toggleMenu}>Contact us</Link>
              </li>
            </ul>
          </div>
        )}

        <div className='lg:flex hidden navRight w-1/2 h-full sm:pr-20 pr-5'>
          <ul className='w-full lg:flex items-center justify-evenly text-stone-700 cursor-pointer'>
            <li className='hover:text-stone-400'>
              <Link to="homeSection" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='hover:text-stone-400'>
              <Link to="aboutSection" smooth={true} duration={500}>About BreastCare</Link>
            </li>
            <li className='hover:text-stone-400'>
              <Link to="articlesSection" smooth={true} duration={500}>Articles</Link>
            </li>
            <li className='hover:text-stone-400'>
              <Link to="faqSection" smooth={true} duration={500}>FAQ</Link>
            </li>
            <li className='hover:text-stone-400'>
              <Link to="contactSection" smooth={true} duration={500}>Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
