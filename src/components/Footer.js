import React from 'react'
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="d-flex hero w-100">
        <div className='w-25'>
          <a className="" href="#">
            <img src={logo} />
          </a>
          <p>E-learning refers to the process of learning using electronic devices such as computers, smartphones, or tablets. Compare to others.</p>
        </div>
          <div className='w-100 d-flex justify-content-evenly'>
            <div className="row">
              <h5>Classes</h5>
              <a href='#' className='col'>Class6</a>
              <a href='#'>Class7</a>
              <a href='#'>Class8</a>
              <a href='#'>Class9</a>
              <a href='#'>Class10</a>
            </div>
            <div className="row">
              <h5>IIT</h5>
              <a href='#' className='col'>VITEE</a>
              <a href='#'>JEE</a>
              <a href='#'>JEE ADVANCE</a>
            </div>
            <div className="row">
              <h5>Robotics</h5>
              <a href='#' className='col'>Robotics-ai</a>
              <a href='#'>Robotics-Iot</a>
              <a href='#'>Game Developement Programme</a>
            </div>
            <div className="row">
              <h5>ContactUs</h5>
              <a href='#' className='col'>info@sreshtaedutech.in</a>
              <a href='#'>sreshtaedutech.in@gmail.com</a>
              <a href='#'>040-35592680</a>
              <a href='#'>+91-9030706500</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer