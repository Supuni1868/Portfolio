

import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Portfolio1.jpg';
import IMG2 from '../../assets/Portfolio2.jpg';
import IMG3 from '../../assets/Portfolio3.jpg';
import IMG4 from '../../assets/Portfolio4.webp';
import IMG5 from '../../assets/Portfolio5.jpg';



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title.</h3>
            <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG2} alt="" />
            </div>
            <h3>This is a portfolio item title.</h3>
            <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG3} alt="" />
            </div>
            <h3>This is a portfolio item title.</h3>
            <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG4} alt="" />
            </div>
            <h3>This is a portfolio item title.</h3>
            <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title.</h3>
            <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          </article>
      </div>
      
    </section>
  )
}

export default portfolio
