import image from "../assets/poser.jpg"

const Section1 = () => {
  return (
    <div className='h-screen w-full flex flex-col md:flex-row'>
      <div className='h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center gap-4 items-start pl-6 md:pl-35'>
        <h2 className='text-5xl'>
          Hi There <span className='hidden'>.</span>
        </h2>
        <h3 className='text-4xl'>I'M <span className= "text-[#ffe02f]">VINAY SANDA</span></h3>
        <div>
          <h1 className='text-4xl mt-14 text-[#ffe02f]'>Autodidact</h1>
        </div>
      </div>
      <div className='h-1/2 md:h-full w-full md:w-1/2 flex justify-center items-center'>
        <img src={image} alt="" title="vinay sanda" className='h-96 w-96 rounded-full' />
      </div>
    </div>
  )
}

export default Section1