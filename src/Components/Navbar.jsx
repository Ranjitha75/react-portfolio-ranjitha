import React from 'react'
import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/ranjitha-m-9604391a2" 
          target="_blank" 
          rel="noopener noreferrer" // Security enhancement
        >
        <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Ranjitha75" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <FaGithub />
        </a>
        <FaWhatsapp />
        <a
        href='mailto:your.ranjitharanju0705@gmail.com'
          >
        <MdEmail />
        </a>
        </div>
    </nav>
  )
}

export default Navbar
