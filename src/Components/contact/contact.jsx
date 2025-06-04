import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kotuwegodagurugesupuni@gmail.com</h5>
            <a href = "mailto:kotuwegodagurugesupuni@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Supuni Kotuwegoda Guruge</h5>
            <a href = "https://m.me/supuni.kotuwegoda.guruge/" target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94 714346665</h5>
            <a href="https://api.whatsapp.com/send?phone=94714346665" target="_blank">Send a message</a>
            </article>

          </div>
           {/*END OF CONTACT OPTIONS*/}
        <form action="">
          <input type = "text" name ='name' placeholder='Your Full Name' required/>
          <input type = "email" name = 'email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
