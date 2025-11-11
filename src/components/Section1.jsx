import image from "../assets/poser.jpg"

const Section1 = () => {
  return (
    <div className='h-screen w-full flex flex-row'>
        <div className='h-full w-1/2 flex flex-col justify-center gap-4 items-start px-28'> 
        <h2 className=' text-5xl '>
               Hi  There <span className='hidden'>.</span>
        </h2>
        <h3 className='text-4xl '> I'M <span className="text-[#e4bf58]">VINAY SANDA</span> </h3>
        <div>
            <h1 className='text-4xl mt-14 text-[#e4bf58]'>Autodidact</h1>
        </div>
        </div>
        <div className='h-full w-1/2 flex justify-center items-center '>
          <img src={image} alt=""  className='h-96  w-96 rounded-full'/>
        </div>
    </div>
  )
}

export default Section1