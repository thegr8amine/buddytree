import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='carousel-slider'>
     
      {SliderData.map((slide, index) => {
        return (
            
      

          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='card-container'>
              <img src={slide.img} alt="Logo" />
              <h1>{slide.h1}</h1>
              <h3>{slide.h3}</h3>
              <div className='blocs'>
                <h3>{slide.h31}</h3>
                <h3>{slide.h32}</h3>
                <h3>{slide.h33}</h3>
                <h3>{slide.h33}</h3>
            </div>
              </div>
            )}
          </div>
        )
      })}
      <div className='arrows'>
       <BsArrowLeftShort className='left-arrow' onClick={prevSlide} />
       <BsArrowRightShort className='right-arrow' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default ImageSlider;