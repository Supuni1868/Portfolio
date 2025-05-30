import React from 'react'
import './header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>Hello I am </h5>
        <h1>K.G.Supuni Shashikala</h1>
        <h5 className = "text-light">Software Enginner</h5>
        <CTA />
      </div>

    </header>
  )
}

export default header
