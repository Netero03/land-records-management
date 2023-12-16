import React from 'react'
import Navbar from './components/Navbar'
<<<<<<< HEAD

=======
>>>>>>> 0e1a08285bf840244f0b999a0e8d7ea899cf320e
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import MainPage from './MainPage';

function App() {
<<<<<<< HEAD
  const [count, setCount] = useState(0)


const App = () => {
  return (
    <><div>
      <Navbar />
    </div><>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}>
            </Route>
            <Route path='/*' element={<MainPage />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </></>

  )
=======
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path='/*' element={<MainPage/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>)
>>>>>>> 0e1a08285bf840244f0b999a0e8d7ea899cf320e
}
}

export default App
