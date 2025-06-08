import React from 'react'
import './footer.css'
import { FaFacebookF} from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href = "#" className='footer_logo'></a>   

      <ul className='permalinks'>

        <li><a href = "#">Home</a></li>
        <li><a href = "#about">About</a></li>
        <li><a href = "#experience">Skills</a></li>
        <li><a href = "#services">Certificates</a></li>
        <li><a href = "#testimonials">Education</a></li>
        <li><a href = "#portfolio">Projects</a></li>
        <li><a href = "#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href = "https://facebook.com"><FaFacebookF/></a>
        <a href = "https://instagram.com"><FiInstagram/></a>
        <a href = "https://linkedin.com"><BsLinkedin/></a>
        <a href = "https://github.com"><FaGithub/></a>
       
        
      </div>

      <div className= "footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
     
    </footer>
    
  )
}

export default footer
