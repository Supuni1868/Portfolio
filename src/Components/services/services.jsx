import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <section id='services'>
      <h2>Certificates</h2>

      <motion.div 

      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.7}}
                    
      
      className='container services__container'>
        <article className="service">
          <div className='service__head'>
            <h3>Certificate Course</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>React Essential Training - Linkedin</p></li>
            <li><BiCheck className='service__list-icon' /><p>Learning Spring with Spring Boot - Linkedin</p></li>
            <li><BiCheck className='service__list-icon' /><p>Learning Angular - Linkedin</p></li>
            <li><BiCheck className='service__list-icon' /><p>Java Object-Oriented Programming - Linkedin</p></li>
            <li><BiCheck className='service__list-icon' /><p>Learning Java 11 - Linkedin</p></li>
            <li><BiCheck className='service__list-icon' /><p>NLP with Python - Linkedin</p></li>
          </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Diploma</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>Diploma IT - Esoft Metro</p></li>
            <li><BiCheck className='service__list-icon' /><p>Diploma in English - Aquinas College</p></li>
          </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Competitions</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>Hult Prize Assured</p></li>
            <li><BiCheck className='service__list-icon' /><p>CyberZee’24 - University of Kelaniya</p></li>
          </ul>
        </article>
      </motion.div>
    </section>
  )
}

export default Services
