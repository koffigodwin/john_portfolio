import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'

const Project = () => {
  return (
    <div className='project-container'>
      <h1>What is the project about!</h1>
      <div className='project-content'>
        <p>A small smart stress-level monitoring device using GSR (Galvanic Skin Response) 
          is designed to detect and track physiological stress by measuring changes in the 
          skin's electrical conductance. These changes occur due to variations in sweat gland 
          activity, which are directly influenced by the autonomic nervous system during stress 
          responses. The device typically consists of a pair of skin-contact electrodes connected 
          to a microcontroller, such as an ESP32 or Arduino Nano, which processes the sensor data. 
          The system can wirelessly transmit real-time stress data to a smartphone or cloud service 
          using Bluetooth Low Energy (BLE), allowing users to monitor and analyze their stress 
          levels through a dedicated mobile application. Compact in form, the device can be worn 
          as a wristband, ring, or patch and is powered by a rechargeable lithium battery. 
          By incorporating features like haptic feedback and optional additional sensors—such 
          as heart rate or skin temperature monitors—it offers a comprehensive, user-friendly 
          solution for mental health awareness, daily stress tracking, and biofeedback therapy.
        </p>
        <div className="carousel w-full">
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={project2} className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={project1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>

      </div>
    </div>
  )
}

export default Project