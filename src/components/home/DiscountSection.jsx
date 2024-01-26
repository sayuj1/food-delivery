import React from 'react';
import { Avatar } from 'antd';
export default function DiscountSection({ discountData }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
      {discountData.map(discount => (
        <div
          key={`${discount.title}-${discount.id}`}
          className={`rounded-xl shadow-md `}
          style={{ backgroundColor: discount.bg }}
        >
          <div className='w-full h-full object-cover rounded-xl  flex flex-col-reverse items-center md:flex-row'>
            <Avatar
              shape='square'
              src={discount.image}
              className='h-full w-full md:w-1/2'
            />
            <div className='flex md:flex-col h-1/4 md:h-full gap-4 m-3 w-full md:w-auto justify-between md:justify-normal'>
              <div className=' ml-3 md:ml-0 md:mt-5 gap-4 flex h-full flex-col'>
                <div className='font-[Nunito] font-bold'>{discount.title}</div>
                <div className='text-blue-700 text-4xl font-[900]'>
                  {discount.percentage}% OFF
                </div>
              </div>
              <div className='mr-2 text-[#83859C] text-sm md:mb-5'>{discount.subTitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
