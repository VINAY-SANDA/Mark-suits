import DeveloperIllustration from '../components/DeveloperIllustration'

const About = () => {
  return (
    <div className='h-screen flex'>
      <div className=' h-full  bg-amber-400 w-[60%]'> 
          <h1>Who AM <i>i</i></h1>           
         <p> I am S.Vinay , a person who loves to code who learns and builds the things in his way and he learns from it</p>
      </div>
      <div className=' h-full w-[40%] pt-10'><DeveloperIllustration/></div>
    </div>
  )
}

export default About