import React from 'react';
import { Avatar } from 'antd';
export default function DiscountSection({ discountData }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
      {discountData.map(discount => (
        <div
          key={discount.id}
          className={`rounded-md shadow-md`}
          style={{ backgroundColor: discount.bg }}
        >
          <div className='w-full h-32 object-cover rounded-md mb-2 flex'>
            <Avatar
              shape='square'
              src={process.env.PUBLIC_URL + discount.image}
              className='h-full w-1/2'
            />
            <div className='flex flex-col h-full gap-4 font-[Nunito] m-3'>
              <div>{discount.title}</div>
              <div className='text-blue-700 text-2xl font-[800]'>
                {discount.percentage}% OFF
              </div>
              <div>{discount.subTitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
