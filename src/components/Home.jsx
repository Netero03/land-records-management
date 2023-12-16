import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    <div className=' h-screen text-left w-full flex justify-start  items-center mx-10'>
      <div>
      <span className='font-semibold text-[60px]'>Land<br/> Registration Using Blockchain</span>
      <div className=' my-4 flex justify-center items-center rounded-2xl font-bold  text-center  w-[150px] h-[50px] bg-blue-300'>
        <Link to='#'> Dashboard</Link>
      </div>
      </div>
      <div className=''>
          <img src="./public/assets/man.png" alt="" className=' object-contain'/>
      </div>
    </div>
    <div className='flex justify-center'>
      
      <div className=' w-[250px] rounded-2xl  mx-5  flex items-center justify-center flex-col h-[300px] border-2 border-blue-400 hover:border-4'>
          <img src="./public/assets/paper.png" alt="" />
          <span className='text-[20px] font-semibold'>User</span>
          <div className=' flex justify-center items-center rounded-2xl font-bold  text-center  w-[150px] h-[50px] bg-blue-300 hover:border-4'>
        <Link to='#'> Dashboard</Link>
          </div>
      </div>
      <div className='w-[250px] mx-5 rounded-2xl flex items-center justify-center flex-col h-[300px] border-2 border-blue-400 hover:border-4'>
          <img src="./public/assets/user.png" alt="" />
          <span className='text-[20px] font-semibold'>User</span>
          <div className=' flex justify-center items-center rounded-2xl font-bold  text-center  w-[150px] h-[50px] bg-blue-300 hover:border-4'>
        <Link to='#'> Dashboard</Link>
          </div>
      </div>
      <div className='w-[250px] mx-5 rounded-2xl flex items-center justify-center flex-col h-[300px] border-2 border-blue-400 hover:border-4'>
          <img src="./public/assets/worker.png" alt="" />
          <span className='text-[20px] font-semibold'>User</span>
          <div className=' flex justify-center items-center rounded-2xl font-bold  text-center  w-[150px] h-[50px] bg-blue-300 hover:border-4'>
        <Link to='#'> Dashboard</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Home