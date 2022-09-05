import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/The-Lord-Buddha-Club-logo.jpg';
const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const m = "true"
  const [menu,setMenu] = useState(m)
  const showmenu = ()=>{
    if(menu==="true"){
      setMenu("false")
    }
    else{
      setMenu("true")
    }
  }
  return (
    <div className="sticky top-0 h-16 w-auto text-white text-sm font-semibold bg-transparent">
      <img src={logo} alt="logo" className="border-2 border-solid border-white h-14 m-2 sm:ml-10 absolute rounded-full" />
      <div className="sm:flex justify-end content-center hidden">
        <Link to="/" className={`m-2 mt-4 p-1 hover:text-gray-500 ${(path === "/") ? "text-gray-500" : ""}`}>Home</Link>
        <Link to="/projects" className={`m-2 mt-4 p-1 hover:text-gray-500 ${(path === "/projects") ? "text-gray-500" : ""}`}>Projects</Link>
        <Link to="/opportunity" className={`m-2 mt-4 p-1 hover:text-gray-500 ${(path === "/opportunity") ? "text-gray-500" : ""}`}>Opportunity</Link>
        <Link to="/aboutus" className={`m-2 mt-4 p-1 hover:text-gray-500 ${(path === "/aboutus") ? "text-gray-500" : ""}`}>About us</Link>
        <Link to="/contactus" className={`m-2 mt-4 p-1 mr-12 hover:text-gray-500 ${(path === "/contactus") ? "text-gray-500" : ""}`}>Contact us</Link>
      </div>
      <div className="flex flex-col justify-end content-center sm:hidden">
        <span className={`material-symbols-outlined ml-auto m-5 ${(menu==="true"? "":"hidden")}`} onClick={showmenu}>
          menu
        </span>
        <span className={`material-symbols-outlined ml-auto m-5 ${(menu==="false"? "":"hidden")}`} onClick={showmenu}>
          close
        </span>
        <Link to="/" className={`m-auto mt-4 p-1 hover:text-gray-500 ${(path === "/") ? "text-gray-500" : ""} ${(menu==="false"? "":"hidden")}`}>Home</Link>
        <Link to="/projects" className={`m-auto mt-4 p-1 hover:text-gray-500 ${(path === "/projects") ? "text-gray-500" : ""} ${(menu==="false"? "":"hidden")}`}>Projects</Link>
        <Link to="/opportunity" className={`m-auto mt-4 p-1 hover:text-gray-500 ${(path === "/opportunity") ? "text-gray-500" : ""} ${(menu==="false"? "":"hidden")}`}>Opportunity</Link>
        <Link to="/aboutus" className={`m-auto mt-4 p-1 hover:text-gray-500 ${(path === "/aboutus") ? "text-gray-500" : ""} ${(menu==="false"? "":"hidden")}`}>About us</Link>
        <Link to="/contactus" className={`m-auto mt-4 p-1 hover:text-gray-500 ${(path === "/contactus") ? "text-gray-500" : ""} ${(menu==="false"? "":"hidden")}`}>Contact us</Link>
      </div>
    </div>
  )
}

export default Navbar
