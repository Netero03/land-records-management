<<<<<<< HEAD
import React from 'react'
import Navbar from './components/Navbar'
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 34017eadc141ba0761657c5cb486a7fbd70a57a7

const App = () => {
  return (
<<<<<<< HEAD
    <div>App
      <Navbar/>
    </div>
=======
    <>
       <div>
        <Home/>
       </div>
    </>
>>>>>>> 34017eadc141ba0761657c5cb486a7fbd70a57a7
  )
}

export default App