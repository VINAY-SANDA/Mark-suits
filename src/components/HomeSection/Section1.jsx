import image from "../../assets/poser.jpg"
"use client";
import { LayoutTextFlip } from "../Layout-text-flip.jsx";
import { motion } from "motion/react";

const Section1 = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row px-4 md:px-0 py-8 md:py-0'>
      <div className='w-full md:w-1/2 flex flex-col justify-center gap-3 md:gap-4 items-start md:pl-20 lg:pl-35 mt-16 md:mt-0'>
        <h2 className='text-3xl md:text-5xl'>
          Hi There <span className='hidden'>.</span>
        </h2>
        <h3 className='text-2xl md:text-4xl'>I'M <span className= "text-[#FFFF00] font-normal ">
          VINAY SANDA
          </span></h3>
        <div>
          <h1 className='text-2xl md:text-4xl mt-8 md:mt-14 text-[#FFFF00]'>
            <motion.div>
        <LayoutTextFlip
          words={["Freelancer", "Software Developer",]}
        />
         </motion.div>
          </h1>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
        <img src={image} alt="Vinay Sanda" title="vinay sanda" className='h-64 w-64 md:h-96 md:w-96 rounded-full grayscale' />
      </div>
    </div>
  )
}

export default Section1