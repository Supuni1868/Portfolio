import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from  './HeaderSocials'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        
        <h3>Hello I am </h3>
        <motion.h1
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.7}}

        
        >Supuni Shashikala</motion.h1>
        <motion.h2 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.7}}
        
        
        className = "text-light">Software Enginner</motion.h2>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div> 

         
        <a href = "#contact" className='scroll_down'>Scroll Down</a>

      
      </div>
    </header>
  )
}

export default header


