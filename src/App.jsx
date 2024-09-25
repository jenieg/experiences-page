/* eslint-disable react/jsx-key */

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import catData from './assets/data/catData'

function App() {

  const cats = catData.map(cat => {
    return <Card 
              key={cat.id}
              image={cat.image} 
              name={cat.name} 
              coloring={cat.coloring} 
              price={cat.price}
              rating={cat.stats.rating}
            />
  })

  return (


    <>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cats}
      </section>
    </>
  )
}

export default App