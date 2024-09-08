
import React from 'react'
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon1 from "../../assets/1.svg"
import icon2 from "../../assets/2.svg"
import icon3 from "../../assets/3.svg"
import icon4 from "../../assets/4.svg"
import logo from "../../assets/logo.svg"
import Image from 'next/image';
export function Footer() {
    return (
        <footer className="p-10 ">
        <div className="max-w-8xl mx-auto w-full flex justify-end  ">
          <div className="w-full sm:w-auto md:w-1/3">
            
                <Image src={logo}  className='w-36 md:w-32 lg:w-48 h-auto' />
            
           
        
            <p className="text-gray-500 md:text-base text-sm font-poppins mt-2">NBC Engineering provides state-of-the-art infrastructure and reliable components.</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Image src={icon1} alt='icon' />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Image src={icon2} alt='icon' />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Image src={icon3} alt='icon' />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Image src={icon4} alt='icon'/>
                </a>
              </div>
          </div>
          <div className='md:pr-36'></div>
          <div className="w-full sm:w-auto md:w-2/3 md:pl-20 flex justify-end">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium font-poppins text-base text-blue mb-4 md:text-lg">Company</h4>
                <ul className="mt-2 md:text-sm text-xs space-y-6 text-gray-500">
                  <li><a href="#" className="hover:text-gray-900 font-poppins">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Features</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Works</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Career</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium md:text-lg text-base mb-4 text-blue">Help</h4>
                <ul className="mt-2 space-y-6 md:text-sm text-xs text-gray-500">
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Customer Support</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Delivery Details</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-gray-900 font-poppins">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }