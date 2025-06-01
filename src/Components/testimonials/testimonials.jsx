import React from 'react'
import './testimonials.css'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Education</h5>

      <div className='container testimonials_container'>
        <article className='testimonials'>
          <div className='client_avatar'>
            <h4 className = 'client_name'>University Of Westminster</h4>
            <small className = 'client_review'>
              BSc.(Hons)(UG) in Computer science in Informatics Institute of Technology.<br/>
              (2023-present)
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <h4 className = 'client_name'>G.C.E. Advanced LEVEL Examination</h4>
            <small className = 'client_review'>
             Combined Mathematics - B<br/>
             Chemistry - B <br/>
             Physics - C <br/> 
             Sujatha Vidyalaya - Matara<br/> 
             2022(2023)
            </small>
          </div>
        </article>
        
        <article className='testimonials'>
          <div className='client_avatar'>
            <h4 className = 'client_name'>G.C.E. Ordinary Level Examination</h4>
            <small className = 'client_review'>
              9A Passes<br/>
              Sujatha Vidyalaya - Matara<br/>
              (2018)
            </small>
          </div>
        </article>
      </div>
      </section>
  )
}

export default testimonials
