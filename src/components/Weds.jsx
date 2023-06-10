import React from 'react'
import "./Weds.css"

import handright from "../img/handright.png";
import hand from "../img/hand.svg";
import heart from "../img/heart-solid.svg"

function Weds() {
  return (
    <>
    <div className='main'>
     <img src={hand} alt='handright' className="imageleft"/>
    <div className="wrapper">
        <h3 className="heading"> Rajashekar</h3> 
        <img  className="heart" src={heart} alt='heart'/>
        <h3>Aathmika</h3>
        </div>
        <img  className="imageRight" src={handright} alt='handright'/>
        </div>
        </>
  )
}

export default Weds