import DeveloperIllustration from '../components/DeveloperIllustration'

const About = () => {
  return (
    <div className="h-screen grid grid-cols-7 row-span-7">
      <div className="col-span-4 flex flex-col justify-center items-start px-12 ">
        <h1 className="underline text-3xl mb-4  ">
          Who AM <i className="text-[#ffe02f] underline">i</i>
        </h1>
        <p>
          I’m Vinay Sanda.I am currently a student pursuing B.Tech 3<sup>rd</sup> year in the CSBS department at BVRIT.
        </p>
        <p>

        </p>
      </div>
      <div className="col-span-3  ">
        <DeveloperIllustration className='h-[80%] mt-8'/>
      </div>
    </div>
  )
}

export default About