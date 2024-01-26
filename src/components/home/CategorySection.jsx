import React from 'react';
import { Avatar } from 'antd';
export default function CategorySection({ categories }) {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mb-4'>
      {categories.map(category => (
        <div
          key={`${category.title}-${category.id}`}
          className={`rounded-xl shadow-md flex flex-col items-center p-2 cursor-pointer hover:bg-[#F8F9FF]`}
        >
          <div className='w-full h-15 object-cover rounded-xl mb-2 flex justify-center'>
            <Avatar
              shape='square'
              src={category.image}
              className='h-12 w-12'
            />
          </div>

          <div className='text-sm text-gray-700'>
            {category.title}
          </div>
        </div>
      ))}
    </div>
  )
}