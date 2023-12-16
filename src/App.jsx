import React from 'react'
import Navbar from './components/Navbar'
<<<<<<< HEAD
=======
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import MainPage from './MainPage';

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 34017eadc141ba0761657c5cb486a7fbd70a57a7
>>>>>>> 2a8ef61558a188cf5aaef3bf20f66a7e216da808

const App = () => {
  return (
    <div>
      <Navbar/>
    </div>
<<<<<<< HEAD
=======
=======
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path='/*' element={<MainPage/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
>>>>>>> 34017eadc141ba0761657c5cb486a7fbd70a57a7
>>>>>>> 2a8ef61558a188cf5aaef3bf20f66a7e216da808
  )
}

export default App