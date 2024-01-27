import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Dropdown } from 'antd';
import { logout } from '../auth/apis';
import Alert from './Alert';
const Navbar = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);


  const handleLogout = () => {
    logout().then(() => {
      navigate('/login');
    }).catch((error) => {
      setAlert({
        type: 'error',
        message: error,
      });
    });
  };
  const profileItems = [
    {
      key: '1',
      label: <button onClick={handleLogout}>Logout</button>,
    },
  ];
  const items = [
    {
      key: '1',
      label: (
        <a
          href='#restaurant'
        >
          Restaurants
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href='#'>
          Deals
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href='#'>
          My Orders
        </a>
      ),
    },
    {
      key: '4',
      label: <button className='hover:text-gray-500 ' onClick={handleLogout}>Logout</button>,
    },
  ];
  return (
    <div>
      {alert && <Alert type={alert?.type} message={alert?.message} />}
      <div className='md:w-[90%] mx-auto p-4'>
        <div className='flex items-center justify-between'>
          <div className='text-[#83859C] text-lg font-bold'>
            <img
              src={'assets/foodDeliveryLogo.svg'}
              alt='food-delivery-logo'
              className='inline-block'
            />
            <div className='relative inline-block'>
              <input
                type='text'
                placeholder='Search'
                className='ml-12 px-4 py-1 rounded-xl bg-[#EDEEF2] focus:outline-none hidden lg:inline-block font-normal text-base  placeholder:text-base placeholder:font-normal'
              />
              <span className='absolute inset-y-0 right-0 top-1 flex items-center pr-3 filter-none'>
                <img src={'assets/search.svg'} alt='' className='filter-none' />
              </span>
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden lg:flex items-center space-x-4'>
              <div className=''>
                <a
                  href='#restaurant'
                  className='hover:text-gray-500 font-bold page-scroll'
                >
                  Restaurants
                </a>
              </div>
              <div className=''>
                <a href='#' className='hover:text-gray-500 font-bold'>
                  Deals
                </a>
              </div>
              <span className='w-[2px] bg-[#EDEEF2] h-full'></span>
              <div className=''>
                <a href='#' className='hover:text-gray-500 font-bold'>
                  My Orders
                </a>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className=''>
                <Badge count={4} color='#4E60FF'>
                  <Avatar
                    shape='square'
                    src={'assets/shoppingBag.svg'}
                    style={{
                      backgroundColor: '#F3F4FF',
                      padding: '7px',
                      cursor: 'pointer',
                      borderRadius: '10px',
                    }}
                  />
                </Badge>
              </div>
              <div className='lg:hidden'>
                <Avatar
                  shape='square'
                  src={'assets/profile.png'}
                  style={{
                    cursor: 'pointer',
                    border: '2px solid #EDEEF2',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <div className='hidden lg:inline-block'>
                <Dropdown
                  menu={{ items: profileItems }}
                  placement='bottomRight'
                  trigger={['click']}
                >
                  <Avatar
                    shape='square'
                    src={'assets/profile.png'}
                    style={{
                      cursor: 'pointer',
                      border: '2px solid #EDEEF2',
                      borderRadius: '10px',
                    }}
                  />
                </Dropdown>
              </div>
              <span className='lg:hidden w-[2px] bg-[#EDEEF2] h-full'></span>
              <div className='lg:hidden'>
                <Dropdown
                  menu={{ items }}
                  placement='bottomRight'
                  trigger={['click']}
                >
                  <Avatar
                    shape='square'
                    src={'assets/menu.svg'}
                    style={{
                      backgroundColor: '#F3F4FF',
                      padding: '7px',
                      cursor: 'pointer',
                      borderRadius: '10px',
                    }}
                  />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#EDEEF2] h-[0.5px]'></div>
    </div>
  );
};

export default Navbar;
