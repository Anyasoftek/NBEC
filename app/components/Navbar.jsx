import React from 'react'
import logo from "../../assets/logo.svg"
import Image from "next/image";
import contact from  "../../assets/contact.svg"

const Navbar = () => {
  return (
    <div className='fixed top-0  left-0 w-full z-50 bg-white backdrop-blur-md     '>
        <nav className='flex justify-between items-center px-5 md:px-16 xl:px-[104px] py-4 md:py-4  '>
        <Image 
      src={logo} 
      alt="NBFC" 
      className='w-24 md:w-32 lg:w-48 h-auto' 
    />
    <Image 
      src={contact} 
      alt="contact" 
      className='w-28 md:w-36 lg:w-48 h-auto' 
    />
        </nav>

    </div>
  )
}

export default Navbar