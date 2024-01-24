import React from 'react';
import { Avatar } from 'antd';
export default function CategorySection({categories}){
  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mb-4'>
          {categories.map(category => (
            <div
              key={category.id}
              className={`rounded-md shadow-md flex flex-col items-center p-2`}
            >
              <div className='w-full h-15 object-cover rounded-md mb-2 flex justify-center'>
                <Avatar
                  shape='square'
                  src={process.env.PUBLIC_URL + category.image}
                  className='h-12 w-12'
                />
              </div>
              <div className='text-sm font-[Nunito] text-gray-700'>
                {category.title}
              </div>
            </div>
          ))}
        </div>
  )
}