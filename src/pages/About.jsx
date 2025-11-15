import DeveloperIllustration from '../components/DeveloperIllustration'

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:grid md:grid-cols-7 md:row-span-7 px-2 md:px-0">
      <div className="md:col-span-4 flex flex-col justify-center items-start px-4 md:px-12 py-6 md:py-0">
        <h1 className="underline text-2xl md:text-3xl mb-4">
          Who AM <i className="text-[#ffe02f] underline">i</i>
        </h1>
        <p className="text-base md:text-lg mb-2">
          I’m Vinay Sanda. I am currently a student pursuing B.Tech 3<sup>rd</sup> year in the CSBS department at BVRIT.
        </p>
      </div>
      <div className="md:col-span-3 flex items-center justify-center py-4 md:py-0">
        <DeveloperIllustration className='w-full max-w-xs md:max-w-md h-auto mt-4 md:mt-8'/>
      </div>
    </div>
  )
}

export default About