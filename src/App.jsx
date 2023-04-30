import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Cards from './Cards'
import Team from './Team'
import './index.css'
function App() {
  return (
    <div className='App text-white overflow-hidden'>  
       <Header />
       <Hero />
       <About />
       <Cards />
       <Team />
    </div>
  )
}

export default App