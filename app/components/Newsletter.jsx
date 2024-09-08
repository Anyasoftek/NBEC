import React from 'react'

export default function Newsletter() {
    return (
        <section className='w-full '>
<div className="bg-blue text-white  md:p-16 p-10 rounded-2xl ">
        <div className="max-w-5xl  mx-auto text-center">
          <h2 className="md:text-5xl text-3xl font-poppins font-bold mb-6">Subscribe to our newsletter</h2>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="text" 
              placeholder="First name" 
              className="w-full text-white sm:w-auto font-poppins p-3 bg-blue rounded-xl border-[1px] focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full text-white sm:w-auto p-3 font-poppins bg-blue rounded-xl border-[1px] focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <button 
              type="submit" 
              className="bg-black text-white font-poppins md:text-base text-sm px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
        </section>
      
    );
  }

