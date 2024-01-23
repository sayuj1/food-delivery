import React from 'react';
import Reviews from '../../assets/reviews.svg';
import Horizontal from '../../assets/horizontal.svg';
import Squared from '../../assets/squared.svg';

const AppInfo = () => {
  return (
    <div className='min-h-screen'>
      <div className="relative">
        <div className="lg:flex">
          <img
            src={Reviews}
            alt="Reviews"
            className="lg:w-1/2 md:w-full"
          />
          <img
            src={Squared}
            alt="Roll Set"
            className="lg:w-1/2 md:w-full"
          />
        </div>
        <div className="absolute inset-0 -inset-y-20 flex justify-end items-end">
          <img
            src={Horizontal}
            alt="Nigiri Set"
            className="w-full"
          />
        </div>
      </div>
      <div className='text-center mx-40'>
        <br />
        <h2 className='mb-2 text-4xl  text-white font-[Nunito]'>Leave reviews for all meals</h2>
        <p className='text-md  mb-4 text-white font-[Nunito]'>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
        <br />
      </div>
    </div>
  )
}

export default AppInfo;