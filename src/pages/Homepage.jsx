import React from 'react'
import Section1 from '../components/HomeSection/Section1';
import Section2h from '../components/HomeSection/Section2h';
import Footer from '../components/Footer'
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className='h-screen w-full'>
      <Section1 />
      <Section2h  />
      <div className='w-full flex items-center flex-col -mt-20 gap-3'>
        <h2 className='text-2xl underline text-[#00BFFF]'>FIND ME ON</h2>
        <h5 className='text-m'>Feel free to <span className='text-[#ffe02f]'>connect</span> with me</h5>
        <div className='space-x-8'>
        <a
          href="https://github.com/VINAY-SANDA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <FaGithub
            className="bg-white text-black rounded-full p-2 overflow-visible text-4xl"
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px 3px white'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 5px 0px white'}
          />
        </a>
        <a 
        href="https://www.linkedin.com/in/vinay-sanda-"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-300 hover:scale-105"
        >
         <SlSocialLinkedin 
           className="bg-white text-black rounded-full p-2 overflow-visible text-4xl"
           onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px 3px white'}
           onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 5px 0px white'}
         />
        </a>
           <a 
        href="https://www.instagram.com/stark_.02_/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-300 hover:scale-105"
        >
         <FaInstagram 
           className="bg-white text-black rounded-full p-2 overflow-visible text-4xl"
           onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px 3px white'}
           onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 5px 0px white'}
         />
        </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage