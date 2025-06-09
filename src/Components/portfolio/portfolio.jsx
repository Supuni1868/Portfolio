import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Portfolio1.jpg';
import IMG2 from '../../assets/Portfolio2.avif';
import IMG3 from '../../assets/Portfolio3.jpg';
import IMG4 from '../../assets/Portfolio4.webp';
import IMG5 from '../../assets/Portfolio5.jpg';
import IMG6 from '../../assets/Portfolio6.webp';

//DO NOT USE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather-App',
    github: 'https://github.com/Supuni1868/Weather-App'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BookStore-API',
    github: 'https://github.com/Supuni1868/BookStore---API'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Sinhala-Grammar-checker',
    github: 'https://github.com/Supuni1868/Sinhala-Grammar-checker'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Plane Seat Management System',
    github: 'https://github.com/Supuni1868/PlaneManagement-System'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Real Time Event Tiketing System',
    github: 'https://github.com/Supuni1868/Ticketing-System'
  },
  {
    id: 6,
    image: IMG3,
    title: 'Real Time Event Tiketing System - Backend',
    github: 'https://github.com/Supuni1868/Ticketing-Platform'
  },
  {
    id: 7,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/Supuni1868/Portfolio'
  } 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image,title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>

                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                 
                </div>
              </article>
            )
          })
        }
       

     </div>
    </section>
  );
};

export default Portfolio;
