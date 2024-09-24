
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import amber from "./assets/amber.jpg"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        image={amber} 
        rating="5.0"
        reviewCount={6}
        coloring="Orange Tabby" 
        name="Amber" 
        price={50}
      />
    </>
  )
}

export default App