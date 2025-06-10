import React from 'react'
import './about.css'
import me from '../../assets/hero.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <motion.div 
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 2 }}
  className="container about__container"
>

         <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt="About Image" />
          </div>
        </div> 

        <div className = "about__content"> 
           <div className ="about__cards">

              <article className='about__card'>
                <a href="#experience" className='about__card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaAward className='about_icon' />
                <h5>Skills</h5>
                </a>
              </article>

            
            <article className = 'about__card'>
              <a href="#testimonials" className='about__card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
              <FiUsers  className='about_icon'/>
              <h5>Educations</h5>
              </a>
            </article>

            <article className = 'about__card'>
              <a href="#portfolio" className='about__card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              </a>
            </article>

           </div>

          <p>
            I am a passionate Computer Science undergraduate specializing in Frontend, Web Development, and Full Stack Development. With a strong foundation in modern web technologies and frameworks, I strive to build user-friendly and responsive applications. Beyond technical skills, I bring a well-rounded set of soft skills including problem-solving, team collaboration, management, leadership, communication, and attention to detail. I enjoy working on challenging projects that allow me to learn, grow, and contribute to impactful digital experiences.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </motion.div>
    </section>
  )
}

export default About
