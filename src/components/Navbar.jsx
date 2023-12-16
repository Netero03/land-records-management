import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react";
const Navbar = () => {

    const [menu,setmenu ] = useState(false)

  return (
    <div>
    <nav className="bg-white flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white border-b-1 border-l-0 border-r-0 border-black shadow-lg  ">    
    <h1
 
className="w-4/12 text-xl px-10 font-bold text-[#000000]">LAND REGISTRY</h1>
      <ul className=" hidden sm:flex flex-row p-4">
        <li>
          <Link href="#" className="px-2 text-base text-gray-600 font-normal hover:text-black">
            Home
          </Link>
        </li>
        <li> 
          <Link to="/user" className="px-2 text-base text-gray-600 font-normal hover:text-black">
            User
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base text-gray-600 font-normal hover:text-black">
            Land Inspector
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base text-gray-600 font-normal hover:text-black">
            Contract Owner
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base text-gray-600 font-normal hover:text-black">
            About
          </Link>
        </li>
      </ul>

    <div className='flex sm:hidden' >
        <img src="./assets/menu.png" alt="" onClick={()=>setmenu(!menu)} className={`${menu?'hidden':"block"} object-contain w-5 h-5 cursor-pointer mx-4`} />
        <img src="./assets/cross.png" alt="" onClick={()=>setmenu(!menu)} className={`${menu?'block':"hidden"} object-contain w-5 h-5 cursor-pointer mx-4 `} />
    
    </div>

    </nav>
    <div className={`${menu?'flex':"hidden"} absolute flex sm:hidden right-6 top-14 rounded-2xl bg-slate-400`}>
        <ul className="text-white font-bold flex flex-col p-4">
        <li>
          <Link href="#" className="px-2 text-base  hover:text-black">
            Home
          </Link>
        </li>
        <li> 
          <Link href="#" className="px-2 text-base hover:text-black">
            User
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base  hover:text-black">
            Land Inspector
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base  hover:text-black">
            Contract Owner
          </Link>
        </li>
        <li>
          <Link href="#" className="px-2 text-base  hover:text-black">
            About
          </Link>
        </li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar