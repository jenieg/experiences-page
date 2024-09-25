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
              {...cat}
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