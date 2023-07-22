import React from 'react'
import Image from '../../assets/images/about-img.png'
import './About.css'

const About = () => {
  return (
    <section className='about' id='about'>
          <h2 className="heading">About <span>Me</span></h2>
          <div className="about-img">
              <img src={Image} alt="" />
              <span className="circle-spin"></span>
          </div>

          <div className="about-content">
              <h3>Frontend Developer</h3>
              <p>Graduate of English Education turned Software Engineer with about three years experience in building functional responsive web
            applications and Restful APIs utilizing HTML5, CSS3-SCSS, Javascript, ReactJs and VueJs. Values simplicity and readability in coding.
  He also prides himself proficient in other roles such as technical support and content writing.</p>
          </div>

      {/*<div className="btn-box btns">
        <a href="#" className="btn">Read More</a>
  </div>*/}
    </section>
  )
}

export default About