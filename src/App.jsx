import StarryNightBackground from './components/StarryNightBackground'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import Normal from './pages/Normal'

const App = () => {
  return (
    <StarryNightBackground 
      density={0.0001} 
      twinkleSpeed={1}
      shootingStars={true}
      nebulaColors={['#000000', '#111', '#000000']}
      overlayOpacity={0.0001}
    >
      <div className='text-white' >
        <Navbar/>
         <Routes>
            <Route path='/' element={<Homepage/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/projects' element={<Projects/>}/>
             <Route path='/resume' element={<Resume/>}/>
         </Routes>

      </div>
    </StarryNightBackground>
  )
}

export default App