import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white border-b-1 border-black shadow-lg">
      {/* Logo */}
      <h1
 
className="w-4/12 text-xl px-10 font-bold text-[#000000]">LAND REGISTRY</h1>
      {/* Links */}
      <ul className="flex  justify-around w-4/12">
        <li>
          <a href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Home
          </a>
        </li>
        <li> 
          <a href="#" className="text-base text-gray-600 font-normal hover:text-black">
            User
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Land Inspector
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-gray-600 font-normal hover:text-black">
            Contract Owner
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-gray-600 font-normal hover:text-black">
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar