import './App.css'
import Hero from './sections/Hero.jsx'
import Info from './sections/Info.jsx'
import Countdown from './sections/Countdown.jsx'
import PrincipalDate from './sections/PrincipalDate.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
      <Hero />
      <PrincipalDate />
      <Info />
      <Countdown />
      <Footer />
    </>
  )
}

export default App