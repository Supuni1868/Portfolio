import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from  './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h3>Hello I am </h3>
        <h1>K.G.Supuni Shashikala</h1>
        <h2 className = "text-light">Software Enginner</h2>
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
