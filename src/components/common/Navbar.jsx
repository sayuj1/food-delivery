import React from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Dropdown } from 'antd';
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
  const profileItems = [
    {
      key: '1',
      label: <span onClick={handleLogout}>Logout</span>,
    },
  ];
  const items = [
    {
      key: '1',
      label: <p>Restaurants</p>,
    },
    {
      key: '2',
      label: <p>Deals</p>,
    },
    {
      key: '3',
      label: <p>My Orders</p>,
    },
    {
      key: '4',
      label: <span onClick={handleLogout}>Logout</span>,
    },
  ];
  return (
    <div>
      <div className='container mx-auto p-4'>
        <div className='flex items-center justify-between'>
          <div className='text-[#83859C] text-lg font-bold'>
            <img src={process.env.PUBLIC_URL+'/assets/foodDeliveryLogo.svg'} alt='food-delivery-logo' className='inline-block' />
            <div className='relative inline-block'>
              <input
                type='text'
                placeholder='Search'
                className='ml-12 px-4 py-1 rounded-xl bg-[#EDEEF2] focus:outline-none hidden lg:inline-block font-[Nunito] font-normal text-base placeholder:font-[Nunito] placeholder:text-base placeholder:font-normal'
              />
              <span className='absolute inset-y-0 right-0 top-1 flex items-center pr-3 filter-none'>
                <img src={process.env.PUBLIC_URL+'/assets/search.svg'} alt='' className='filter-none' />
              </span>
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden lg:flex items-center space-x-4'>
              <div className=''>
                <a
                  href='#'
                  className='hover:text-gray-500 font-[Nunito] font-bold'
                >
                  Restaurants
                </a>
              </div>
              <div className=''>
                <a
                  href='#'
                  className='hover:text-gray-500 font-[Nunito] font-bold'
                >
                  Deals
                </a>
              </div>
              <span className='w-[2px] bg-[#EDEEF2] h-full'></span>
              <div className=''>
                <a
                  href='#'
                  className='hover:text-gray-500 font-[Nunito] font-bold'
                >
                  My Orders
                </a>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className=''>
                <Badge count={4} color='#4E60FF'>
                  <Avatar
                    shape='square'
                    src={process.env.PUBLIC_URL+'/assets/shoppingBag.svg'}
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
                  src={process.env.PUBLIC_URL+'/assets/profile.png'}
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
                      src={process.env.PUBLIC_URL+'/assets/profile.png'}
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
                    src={process.env.PUBLIC_URL+'/assets/menu.svg'}
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
      <br/>
    </div>
  );
};

export default Navbar;
