import React from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import Navbar from './common/Navbar';
const restaurantsData = [
  { id: 1, name: 'Restaurant 1', cuisine: 'Italian', image: 'restaurant1.jpg' },
  { id: 2, name: 'Restaurant 2', cuisine: 'Mexican', image: 'restaurant2.jpg' },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Japanese',
    image: 'restaurant3.jpg',
  },
];

const Home = () => {
  const { state } = useLoginContext();
  return (
    <React.Fragment>
      {state?.isLoggedIn && <Navbar />}
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* {restaurantsData.map(restaurant => (
            <div
              key={restaurant.id}
              className='bg-white p-4 rounded-md shadow-md'
            >
              <img
                src={`/images/${restaurant.image}`}
                alt={restaurant.name}
                className='w-full h-32 object-cover rounded-md mb-2'
              />
              <div className='text-lg font-semibold mb-2'>
                {restaurant.name}
              </div>
              <div className='text-gray-600'>{restaurant.cuisine}</div>
            </div>
          ))} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
