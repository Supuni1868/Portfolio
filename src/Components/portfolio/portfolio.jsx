import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Portfolio1.jpg';
import IMG2 from '../../assets/Portfolio2.avif';
import IMG3 from '../../assets/Portfolio3.jpg';
import IMG4 from '../../assets/Portfolio4.webp';
import IMG5 from '../../assets/Portfolio5.jpg';

//DO NOT USE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG1,
    title: 'This is a portfolio item title.',
    github: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
