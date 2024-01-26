import React from 'react';
import { Avatar } from 'antd';
export default function ResturantSection({ restaurantsData }) {
  return (
    <React.Fragment>
      <div className='mt-9 mb-3 font-bold text-xl'>Nearby Resturants</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {restaurantsData.map(restaurant => (
          <div key={`${restaurant.name}-${restaurant.id}`} className='bg-white rounded-xl shadow-md'>
            <div className='w-full h-[135px] object-cover rounded-xl '>
              <Avatar
                shape='square'
                src={restaurant.image}
                className='h-full w-full'
                style={{
                  cursor: 'pointer',
                  borderRadius: '10px 10px 0 0',
                }}
              />
            </div>
            <div className='text-lg font-semibold m-4'>
              <div className='flex justify-between'>
                <div className=''>{restaurant.name}</div>
                <div className=''>
                  <img src={'assets/shopping-bag.svg'} />
                </div>
              </div>
              <div className='flex text-[12px] text-[#83859C] font-normal'>
                <img src='assets/clock.svg' alt="" />&nbsp;{restaurant.time} min &nbsp;<img src='assets/dot.svg' alt="" /> &nbsp; {restaurant.minsum} min sum
              </div>
              <div className='flex gap-2 mt-2'>
                {restaurant?.categories.map(category => (
                  <div className='text-gray-600 inline-block bg-[#EDEEF2] rounded-full px-1' key={category.title}>
                    <div className='flex h-full items-center mx-2 gap-2'>
                      <img src={category.image} alt="" className='h-3 w-3  ' />
                      <span className='text-[12px]'>{category.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}