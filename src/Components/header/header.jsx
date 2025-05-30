import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from  './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>Hello I am </h5>
        <h1>K.G.Supuni Shashikala</h1>
        <h5 className = "text-light">Software Enginner</h5>
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
