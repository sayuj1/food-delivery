import React from 'react';

const AppInfo = () => {
  return (
    <div className='min-h-screen'>
      <div className='relative px-10'>
        <div className='lg:flex'>
          <img
            src={'assets/reviews.svg'}
            alt='Reviews'
            className='lg:w-1/2 md:w-full mr-5'
          />
        </div>
        <div className='absolute inset-y-0 right-0 flex pr-32 pt-10'>
          <img
            src={'assets/squared.svg'}
            alt='Roll Set'
          />
        </div>
        <div className='absolute inset-0 -inset-y-32 flex justify-end items-end'>
          <img
            src={'assets/horizontal.svg'}
            alt='Nigiri Set'
            className='w-full'
          />
        </div>
      </div>
      <div className='text-center mx-40 mt-16'>
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
    </div>
  );
};

export default AppInfo;
