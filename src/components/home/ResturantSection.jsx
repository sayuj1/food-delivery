import React from 'react';
import { Avatar } from 'antd';
export default function ResturantSection({restaurantsData}){
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {restaurantsData.map(restaurant => (
            <div key={restaurant.id} className='bg-white rounded-md shadow-md'>
              <div className='w-full h-32 object-cover rounded-md mb-2'>
                <Avatar
                  shape='square'
                  src={process.env.PUBLIC_URL + restaurant.image}
                  className='h-full w-full'
                  style={{
                    cursor: 'pointer',
                    borderRadius: '10px 10px 0 0',
                  }}
                />
              </div>
              <div className='text-lg font-semibold mb-2'>
                {restaurant.name}
              </div>
              <div className=''>
                {restaurant?.categories.map(category => (
                  <div className='text-gray-600'>{restaurant.category}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
  )
}