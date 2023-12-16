import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  
    <nav className="bg-white flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white ">
       
      {/* Logo */}
      <h1
 
className="w-4/12 text-xl px-10 font-bold text-[#000000]">LAND REGISTRY</h1>
      {/* Links */}
      <ul className="flex  justify-around w-4/12">
        <li>
          <Link href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Home
          </Link>
        </li>
        <li> 
          <Link href="#" className="text-base text-gray-600 font-normal hover:text-black">
            User
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Land Inspector
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Contract Owner
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-600 font-normal hover:text-black">
            About
          </Link>
        </li>
      </ul>
      <div className='border-b-1 border-black shadow-lg'></div>
    </nav>
    
  )
}

export default Navbar