import React from 'react'
import Section1 from '../components/HomeSection/Section1';
import Section2h from '../components/HomeSection/Section2h';
import Footer from '../components/Footer'
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center px-2 md:px-0'>
      <Section1 />
      <Section2h />
      <div className='w-full flex flex-col items-center mt-4 md:-mt-20 gap-3 px-2'>
        <h2 className='text-xl md:text-2xl underline text-[#00BFFF] text-center'>FIND ME ON</h2>
        <h5 className='text-sm md:text-base text-center'>Feel free to <span className='text-[#ffe02f]'>connect</span> with me</h5>
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 mt-2'>
          <a
            href="https://github.com/VINAY-SANDA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            aria-label="GitHub"
          >
            <FaGithub className="bg-white text-black rounded-full p-2 text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-sanda-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="LinkedIn"
          >
            <SlSocialLinkedin className="bg-white text-black rounded-full p-2 text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/stark_.02_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
            aria-label="Instagram"
          >
            <FaInstagram className="bg-white text-black rounded-full p-2 text-3xl md:text-4xl" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage