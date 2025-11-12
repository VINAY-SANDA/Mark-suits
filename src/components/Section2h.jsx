import React from 'react'

const Section2h = () => {
  return (
    <div className='h-screen flex '>
      <div className='w-2/3 p-20 flex items-center justify-center flex-col gap-8'>
        <h1 className='text-3xl mr-24'> LET ME  <span className='textcol'>INTRODUCE MYSELF</span></h1>
        <div className='capitalize tracking-widest flex flex-col gap-6 leading-loose px-10 py-4'>
          <p>
            I’m a <span className='text-[#ffd900]'>passionate developer</span> with a deep interest in <span className='text-[#ffe02f]'>technology, innovation</span> and real-world <span className='text-[#ffe02f]'>problem solving.</span>
          </p>

          <p>
            I specialize in <span className='text-[#ffe02f]'>Java</span> and <span className='text-[#ffe44a]'>Data Structures & Algorithms</span>, using them to build smart, efficient, and user-focused applications.
          </p>

          <p>
            I believe every <span className='bug-wrap inline-block relative'>bug<span className='bug-emoji' aria-hidden='true'>🐞</span></span> teaches something new  usually <span className='text-[#ffe02f]'>patience</span>, sometimes <span className='text-[#ffe02f]'>panic</span>, but always <span className='text-[#ffe02f]'>progress</span>.
          </p>
        </div>
      </div>
      <div className='h-screen w-1/3'>
      </div> 
    </div>
  )
}

export default Section2h