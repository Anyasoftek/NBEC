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
   <button className='bg-blue transition duration-300  ease-in-out md:w-48 w-28 mt-2 md:px-6 md:py-4  px-4 sm:py-2 py-2 rounded-2xl inline-block hover:bg-black text-white font-bold md:tracking-widest tracking-wider font-gilroy sm:text-[8px] min-[390px]:text-[6px] text-[8px]  md:text-sm'>
            Get in Touch
          </button>
        </nav>

    </div>
  )
}

export default Navbar