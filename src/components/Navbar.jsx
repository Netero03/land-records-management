import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <h1
 
className="w-full text-3xl font-bold text-[#00df9a]">LAND REGISTRY</h1>
      {/* Links */}
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-base font-medium hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-base font-medium hover:text-gray-300">
            User
          </a>
        </li>
        <li>
          <a href="#" className="text-base font-medium hover:text-gray-300">
            Land Inspector
          </a>
        </li>
        <li>
          <a href="#" className="text-base font-medium hover:text-gray-300">
            Contract Owner
          </a>
        </li>
        <li>
          <a href="#" className="text-base font-medium hover:text-gray-300">
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar