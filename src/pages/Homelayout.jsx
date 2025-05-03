import React from 'react'
import Image from '../assets/john.jpg'
import '../pages/CSS/Home.css'

const Homelayout = () => {
  return (
    <div className="layout-container">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={Image}
      className="max-w-sm rounded-lg shadow-2xl h-96 home-img"
    />
    <div className='home-text'>
      <h1 className="para1">Hey John here!</h1>
      <p className="py-6 m-2 para2">
      My name is Fionou Ablam Jean Holali, a second-year Biomedical Engineering student pursuing 
      a B.Tech degree at SRM Institute of Science and Technology. This portfolio has been created as part of
       my learning in the Bioinstrumentation course. Bioinstrumentation plays a vital role in the field of
        biomedical engineering by providing the tools and technologies used to monitor, diagnose, and treat medical conditions. 
        Through this course, I have gained valuable insights into the design and application of biomedical instruments, and 
        this portfolio showcases my understanding, academic work, and reflections related to the subject.
      </p>
    </div>
  </div>
</div>
  )
}

export default Homelayout