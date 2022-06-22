import React from 'react'
import logo from '../images/icon-2.png'



const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center top ">
            <div className="img">
                <img src={logo} alt="" />
                <p> 2022. All right reserved by LoopDigit</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer