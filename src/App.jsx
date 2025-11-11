import StarryNightBackground from './components/StarryNightBackground'
import './App.css'

const App = () => {
  return (
    <StarryNightBackground 
      density={0.001} 
      twinkleSpeed={0.03} 
      shootingStars={true}
      nebulaColors={['#000000', '#111', '#000000']}
      overlayOpacity={0.15}
    >
      <div>

      </div>
    </StarryNightBackground>
  )
}

export default App