import React from 'react'
import mohssine from "../assets/mohssine.png"
import shopping from "../assets/shopping.png"
import spotlight from "../assets/spotlight.png"
import landingpage from "../assets/landingpage.png"
import ecommerce from "../assets/ecommerce.png"
import pencil from "../assets/pencil.png"
import sport from "../assets/sport.png"
import book from "../assets/book.png"



const Rightnav = () => {
  return (
    <div className='rightNav'>
       <div className='leftNavContainer'>
        <h3>Projects types:</h3>
        <h4>Web site:</h4>
        <p>Landing page <img src={landingpage}/></p>
        <p>Show page <img src={spotlight}/></p>
        <p>E-commerce <img src={shopping}/></p>
        <h4>Mobile app:</h4>
        <p>E-commerce <img src={ecommerce}/></p>
        <p>Todo app <img src={pencil}/></p>
        <p>Sport app <img src={sport}/></p>
        <p>Booking app <img src={book}/></p>
        </div>
    </div>
  )
}

export default Rightnav