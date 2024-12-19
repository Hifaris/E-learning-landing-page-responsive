import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Services/service'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Banner2 from './components/Banner/Banner2'

function App() {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero/>
      <Service/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
    </main>
  )
}

export default App