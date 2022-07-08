import React from 'react'
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='navBar'>
        <Link style={{textDecoration:"none",display:"flex",alignItems:"center"}} to="/">
        <div className='logo'>
            <h1>M</h1>
        </div>
        <h2 style={{color:"rgb(27, 148, 255)",marginLeft:"3px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontSize:"28px"}}>ochaffaa</h2>
        </Link>
        <div className='pages'>
        <Link className='page' style={{textDecoration:"none"}} to="/projects">Projects</Link>
        <Link className='page' style={{textDecoration:"none"}} to="/contactUs">Contact us</Link>
        </div>
    </div>
  )
}

export default Header