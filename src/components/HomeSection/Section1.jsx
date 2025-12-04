import image from "../../assets/poser.jpg"
"use client";
import { LayoutTextFlip } from "../Layout-text-flip.jsx";
import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row px-4 md:px-0 pt-4 md:pt-4 pb-8 md:pb-0 relative'>
      <div className='w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-4 items-start md:pl-20 lg:pl-35 py-8 md:py-0 z-10'>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl font-bold'
        >
          Hi There <span className='hidden'>.</span>
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl md:text-4xl font-semibold'
        >
          I'M <span className= "text-[#FFFF00] font-normal ">
          VINAY SANDA
          </span>
        </motion.h3>
        <div>
          <h1 className='text-3xl md:text-4xl mt-6 md:mt-14 text-[#FFFF00]'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LayoutTextFlip
                words={["Freelancer", "Software Developer", "Tech Enthusiast"]}
              />
            </motion.div>
          </h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-gray-400 max-w-md text-lg"
        >
          Building digital experiences with passion and precision.
        </motion.p>
      </div>
      
      <div className='w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#00BFFF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img src={image} alt="Vinay Sanda" title="vinay sanda" className='h-72 w-72 md:h-96 md:w-96 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white/10 relative z-10 object-cover shadow-2xl' />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest uppercase">Scroll Down</span>
        <FaArrowDown />
      </motion.div>
    </div>
  )
}

export default Section1