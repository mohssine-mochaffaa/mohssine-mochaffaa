import React, { useEffect, useState } from 'react'
import Centernav from './Centernav'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import bg from '../assets/bg.png'

const Home = () => {
  useEffect(()=>{
  const myLoop = setInterval(() => {
    
      try {
        window.scroll({
          top:0,
          left:0,
          behavior:"smooth"
        });
        
       } catch (error) {
        console.log("hhhhh")
       }
       
    clearInterval(myLoop)
      console.log('')
   }, 400);
  },[])

  return (
    <div id="scroller" className='cont' style={{backgroundImage:`url(${bg})`, backgroundAttachment: "fixed"}}>
    <div className='home'>
      <Leftnav/>
      <Centernav/>
      <Rightnav/>
    </div>
    <center>
    <div className='home2'>
    <Centernav/>
      <Leftnav/>
      <Rightnav/>
    </div>
    </center>
    <footer style={{height:"100px",bottom:0}}>
      <center>
        <p>Created by Mochaffaa-Mohssine</p>
      </center>
    </footer>
    </div>
  )
}

export default Home