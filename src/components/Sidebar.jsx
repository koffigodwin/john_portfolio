import React from 'react'
import { ImCross } from "react-icons/im";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { GlobalUserContext } from '../General';


const Sidebar = () => {
  const { theme, HandleTheme, HandleSidebar } = GlobalUserContext()
  return (
    <div className='side-container'>
      <dir className='cross'>
        <button className='btn-cross'><ImCross/></button>
      </dir>
      <div className="sid-nav">
        <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href='/project'>Projects</a></li>
        <li><a href='/works'>Works</a></li>
        <li><a href='/waste'>Waste</a></li>
        </ul>
      </div>
      <div className="themes-controller">
                {theme === "night"?
                <button className='btn-theme' onClick={HandleTheme}><FaMoon /></button>
                : <button className='btn-theme' onClick={HandleTheme}><MdOutlineLightMode /></button>
              }
      </div>
    </div>
  )
}

export default Sidebar