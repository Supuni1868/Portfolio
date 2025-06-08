import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Certificates</h2>

      <div className='container services__container'>
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
      </div>
    </section>
  )
}

export default Services
