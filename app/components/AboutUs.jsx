import React from 'react'
import bg from "../../assets/bg.svg"
import Image from 'next/image'
import gear from "../../assets/gear.svg"
import brac from "../../assets/brac.svg"
import brain from "../../assets/brain.svg"
const Aboutus = () => {
  return (
    <section className='pt-10  relative'>
        <div className='w-full relative '>
            <Image src={bg} alt="bg" className='rounded-2xl' />
            <div className='absolute inset-0 flex flex-col items-end px-8 justify-end md:pb-40 pb-16'>
            <h1 className='font-gilroy font-bold text-white md:text-7xl text-2xl tracking-wider text-end leading-tight'>
  <span className='block'>Drive the Future with</span>
  <span className='block'>NBC Engineering&rsquo;s Electric</span>  {/* Escaped ' using &rsquo; */}
  <span className='block'>Rickshaws</span>
</h1>

          <button className='bg-blue transition duration-300 mt-2 ease-in-out md:w-48 w-32 md:px-6 md:py-4 px-4 py-2 rounded-2xl inline-block hover:bg-black text-white font-bold md:tracking-widest tracking-wider font-gilroy text-[10px]  md:text-sm'>
            Explore Products
          </button>
            </div>
            
        </div>
        <div className='rounded-2xl md:mb-32 mb-48  '> 
        <div className="absolute bottom-0 shadow-xl  left-1/2 transform -translate-x-1/2 md:w-full mx-auto w-[90%] rounded-2xl  md:max-w-6xl bg-white bg-opacity-40 backdrop-blur-md border border-white    md:pb-10 md:pt-8 p-2">
      <div className="flex md:justify-around flex-col md:flex-row items-center mb-4 md:mb-10">
        <div className="flex items-center space-x-2 md:pb-2 pb-2">
        <Image src={gear} alt='gear' className="w-8 h-8 md:w-12 md:h-12 object-contain"/>

          <div>
            <h3 className="font-medium font-gilroy md:text-xl text-xs">Unique Design</h3>
            <p className="md:text-sm font-gilroy text-[10px] text-black">combines style with functionality</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 md:pb-2 pb-2">
        <Image src={brain} alt='brain' className="w-8 h-8 md:w-12 md:h-12 object-contain"/>
          <div>
            <h3 className="font-medium font-gilroy md:text-xl text-xs">Smart Features</h3>
            <p className="md:text-sm font-gilroy text-[10px] text-black">enhance comfort & convenience</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 md:pb-2 pb-2">
        <Image src={brac} alt='brac' className="w-8 h-8 md:w-12 md:h-12 object-contain"/>
          <div className='w-full'>
            <h3 className="font-medium font-gilroy md:text-xl text-xs">Clear Structures</h3>
            <p className="md:text-sm font-gilroy text-[10px] text-black"> robust structure for convenience </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        <div className=' md:pr-32 text-center md:text-left'>
          <h2 className="md:text-2xl text-sm md:tracking-wider font-medium font-gilroy mb-2">Start your journey with exploring our <span className="text-blue">mission</span></h2>
          <p className="text-gray-600 md:text-lg text-[10px] font-gilroy">our mission to revolutionize urban transportation with sustainable solutions.</p>
        </div>
        <button className="md:px-6 font-gilory md:text-sm text-[10px] px-2 py-2 md:py-2 border-2 border-gray-800 rounded-full hover:bg-black hover:text-white transition-colors">
          Read About Us
        </button>
      </div>
    </div></div>
    </section>
  )
}

export default Aboutus