import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../contexts/LoginContext';
const Navbar = () => {
  const navigate = useNavigate();
  const { state, setState } = useLoginContext();
  const handleLogout = () => {
    setState({
      ...state,
      isLoggedIn: false,
    });
    navigate('/login');
  };
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='text-white font-bold text-xl'>iion-eats</div>
          <input
            type='text'
            placeholder='Search'
            className='p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='flex items-center space-x-4'>
          <a href='#' className='text-white'>
            Restaurants
          </a>
          <a href='#' className='text-white'>
            Deals
          </a>
          <a href='#' className='text-white'>
            My Orders
          </a>
          <a href='#' className='text-white'>
            Cart
          </a>
          <div className='flex items-center'>
            <div
              className='w-8 h-8 bg-gray-300 rounded-full'
              onClick={handleLogout}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
