import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import './Compocss/Navbar.css'
import { GlobalUserContext } from '../General';

const Navbar = () => {
  
  const { theme, HandleTheme, HandleSidebar } = GlobalUserContext()

  return (
    <div className="btn btn-primary navbar-container">
      <div className='start-nav'>
        <h1 className='name-title'>Fionou Jean</h1>
      </div>
      <div className="end-nav">
        <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About The Course</a></li>
        <li><a href='/project'>Project</a></li>
        <li><a href='/units'>Works</a></li>
        <li><a href='/skills'>Lab</a></li>
        </ul>
      </div>
      <div className="theme-controller">
          {theme === "night"?
          <button className='btn-theme' onClick={HandleTheme}><FaMoon /></button>
          : <button className='btn-theme' onClick={HandleTheme}><MdOutlineLightMode /></button>
        }
        </div>
        <div className="menu">
          <button onClick={HandleSidebar}><IoMenuSharp/></button>
        </div>
    </div>
  )
}

export default Navbar


{/* <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href='/project'>Projects</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">Godwin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href='/project'>Projects</a></li>
        <li><a href='/contact'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}