import React from 'react'
import Course from '../assets/course.jpg'
import '../pages/CSS/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='question'>What is Bioinstrumentation ?</h1>
      <p className='about-text'>Bioinstrumentation is a fundamental course in biomedical engineering that focuses on 
        the principles, design, and application of instruments used to measure biological signals. 
        It introduces students to the various sensors and transducers used to detect physiological 
        parameters such as ECG, EEG, EMG, blood pressure, and temperature. The course also covers 
        signal conditioning, data acquisition, and safety standards in medical devices. 
        By understanding the working mechanisms behind biomedical instruments, students gain 
        the knowledge required to contribute to the development and improvement of medical technology.
      </p>
      <h1 className='question'>Why is it important?</h1>
      <p className='about-text'>Bioinstrumentation is crucial in the field of biomedical engineering as it enables the 
        monitoring and diagnosis of medical conditions. The ability to accurately measure and 
        analyze physiological signals is essential for patient care, research, and the development 
        of new medical technologies. By understanding bioinstrumentation, students can contribute 
        to advancements in healthcare, improve patient outcomes, and enhance the overall quality of medical devices.
      </p>  
      <h1 className='question'>What we can expect from this course?</h1>

      <img src={Course} alt="Course" />
    </div>
  )
}

export default About