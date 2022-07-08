import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Web from "./Web"
import Mobile from './Mobile'
import web from "../assets/computer.png"
import mobile from "../assets/smartphone.png"


const Projects = () => {
  return (
    <div className='projects'>
              <center>
              <div className='choose'>
              <Link style={{textDecoration:"none"}} to="/projects/web">
               <div className='img1'> <img src={web}/> <p>Website</p></div>
               </Link>
               <Link style={{textDecoration:"none"}} to="/projects/mobile">
               <div className='img1'> <img src={mobile}/><p>mobile app</p></div>
               </Link>
              </div>
              </center>

      <Routes>
        <Route path="web" element={<Web/>} />
        <Route path="mobile" element={<Mobile/>} />
      </Routes>
    </div>
  )
}

export default Projects