import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion' // Importing motion from framer-motion for animations

const experience = () => {
  return (
    <section id = 'experience'>
      <h5>What skills i have</h5>
      <h2>My Skills</h2>

      <motion.div 

      initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
        
      className="container experience_container">
        <div className="experience_frontend">
        <h3>Programming Languages</h3>
          <div className = "experience_content">
           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
               <h4>Java</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Python</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

          </div>
        </div>

      {/*END OF FRONTEND*/}

        <div className='experience_backend'>

          <h3>Frameworks and Libraries</h3>
          <div className = "experience_content">
           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Spring Boot</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Tailswind CSS</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>


          </div>
        </div>
        {/*END OF BACKEND*/}

        <div className='experience_Database'>

          <h3>DataBase</h3>
          <div className = "experience_content">
           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MySql</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>


          </div>
        </div>
        {/*END OF DATABASE*/}

        <div className='experience_Tools'>

          <h3>Tools</h3>
          <div className = "experience_content">
           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Git</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Figma</h4>
            <small className = 'text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Postman</h4>     
            <small className = 'text-light'>Experienced</small>
            </div>   
           </article>


          </div>
        </div>
        </motion.div>

      </section>
  )
}

export default experience