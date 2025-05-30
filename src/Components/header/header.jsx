import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>Hello I am </h5>
        <h1>K.G.Supuni Shashikala</h1>
        <h5 className = "text-light">Software Enginner</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      
      </div>
    </header>
  )
}

export default header
