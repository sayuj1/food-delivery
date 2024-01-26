import React from 'react';
import { Carousel } from 'antd';
import AppInfo from './AppInfo';
const LandingPage = () => {
  const carouselSize = 2;
  const infoArr = Array(carouselSize).fill(0);
  return (
    <Carousel autoplay>
      {infoArr.map((value, index) => <AppInfo key={index} />)}
    </Carousel>
  )
}

export default LandingPage;