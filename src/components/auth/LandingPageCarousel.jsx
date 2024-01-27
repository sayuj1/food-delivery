import React from 'react';
import { Carousel } from 'antd';

const LandingPageCarousel = () => {
  const carouselSize = 4;
  const infoArr = Array(carouselSize).fill(0);
  return (
    <Carousel autoplay >
      {infoArr.map((value, index) => <div className='min-h-screen' key={index}>
        <div className='relative px-10 mt-5'>
          <img
            src={'assets/landing-img.svg'}
            alt='Reviews'
            className='md:w-full h-[65vh]'

          />
        </div>
        <div className='text-center mx-40 '>
          <br />
          <h2 className='mb-2 text-4xl  text-white'>
            Leave reviews for all meals
          </h2>
          <p className='text-md  mb-4 text-white'>
            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
            probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
          </p>
          <br />
        </div>
      </div>)}
    </Carousel>
  )
}

export default LandingPageCarousel;