

/*import React from 'react'
import './testimonials.css'
import {Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    name: 'University Of Westminster',
    review: `BSc.(Hons)(UG) in Computer Science at Informatics Institute of Technology.
(2023-present)`
  },
  {
    name: 'G.C.E. Advanced LEVEL Examination',
    review: `Combined Mathematics - B
Chemistry - B 
Physics - C 
Sujatha Vidyalaya - Matara
2022(2023)`
  },
  {
    name: 'G.C.E. Ordinary Level Examination',
    review: `9A Passes
Sujatha Vidyalaya - Matara
(2018)`
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Education</h5>

      <Swiper className='container testimonials_container'
      //install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <h4 className='client_name'>{name}</h4>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials*/ 

import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper/modules'; // ✅ correct import for Swiper v9+
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    name: 'University Of Westminster',
    review: `BSc.(Hons)(UG) in Computer Science at Informatics Institute of Technology.
(2023-present)`
  },
  {
    name: 'G.C.E. Advanced LEVEL Examination',
    review: `Combined Mathematics - B
Chemistry - B 
Physics - C 
Sujatha Vidyalaya - Matara
2022(2023)`
  },
  {
    name: 'G.C.E. Ordinary Level Examination',
    review: `9A Passes
Sujatha Vidyalaya - Matara
(2018)`
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Education</h5>

      <Swiper
        className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ name, review }, index) => (
            <SwiperSlide key={index} className='testimonials'>
              <h4 className='client_name'>{name}</h4>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;


