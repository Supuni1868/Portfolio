import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className= 'header_socials'>
        <a href ="https://linkedin.com" targets="_blank"><BsLinkedin/></a>
        <a href ="https://github.com" targets="_blank"><FaGithub/></a>
    
    </div>
  )
}

export default HeaderSocials
