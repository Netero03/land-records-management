import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=' h-screen w-full flex justify-start  items-center mx-10'>
      <div>
      <span className='font-semibold text-left text-[60px]'>Land<br/> Registration Using Blockchain</span>
      <div>
        <Link to='#'> Dashboard</Link>
      </div>
      </div>
      <div className=' mr-10'>
          <img src="./public/assets/man.png" alt=""/>
      </div>
    </div>
  )
}

export default Home