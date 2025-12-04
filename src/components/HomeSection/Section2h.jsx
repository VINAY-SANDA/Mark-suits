import React from 'react'
import RightHSe2 from './RightHSe2'

const Section2h = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row px-4 md:px-0 pt-8 md:pt-0 pb-8 md:pb-0'>
      <div className='w-full md:w-2/3 py-6 md:py-20 px-2 md:pl-5 flex items-center justify-center flex-col gap-6 md:gap-8'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:mr-24'> LET ME  <span className='textcol'><i>INTRODUCE MYSELF</i></span></h1>
        <div className='capitalize tracking-wide md:tracking-widest flex flex-col gap-5 md:gap-6 leading-relaxed md:leading-loose px-2 md:px-10 py-2 md:py-4 text-base md:text-lg'>
          <p>
            I’m a <span className='text-[#FFFF00]'><i>passionate developer</i><i></i></span> with a deep interest in <span className='text-[#FFFF00]'><i>technology, innovation</i></span> and real-world <span className='text-[#FFFF00]'><i>problem solving.</i></span>
          </p>
          <p>
            I believe every <span className='bug-wrap inline-block relative text-red-500'>bug<span className='bug-emoji' aria-hidden='true'>🐞</span><i></i></span> teaches something new  usually <span className='text-[#FFFF00]'><i>patience</i></span>, sometimes <span className='text-[#FFFF00]'><i>panic</i></span>, but always <span className='text-[#FFFF00]'><i>progress</i></span>.
          </p>
        </div>
      </div>
        <RightHSe2/>
    </div>
  )
}

export default Section2h