import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

function MainPage() {
  return (
    <div>
      <Navbar/>
    <div className=' mx-20'>
    <Home />
    </div>
    </div>
  )
}

export default MainPage