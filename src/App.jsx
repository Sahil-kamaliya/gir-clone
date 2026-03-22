import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutgir from './components/Aboutgir'
import Historyofgir from './components/Historyofgir'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutgir/>
      <Historyofgir/>
    </div>
  )
}

export default App