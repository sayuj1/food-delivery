import React from 'react';
import Cart from '../../assets/shoppingBag.svg'
import Logo from '../../assets/foodDeliveryLogo.svg'
import Profile from '../../assets/profile.png'
import Menu from '../../assets/menu.svg'
import Search from '../../assets/search.svg'
import { Avatar, Badge, Dropdown, Button } from 'antd';
const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <a href="#">
          Restaurants
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href="#">
          Deals
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="#">
          My Orders
        </a>
      ),
    }
  ];
  return (
    <div>
      <div className=" p-4">
        <div className="flex items-center justify-between">
          <div className="text-[#83859C] text-lg font-bold">
            <img src={Logo} alt="food-delivery-logo" className='inline-block' />
            <div className='relative inline-block'>
              <input
                type="text"
                placeholder="Search"
                className="ml-12 px-4 py-1 rounded-xl bg-[#EDEEF2] focus:outline-none hidden lg:inline-block font-[Nunito] font-normal text-base placeholder:font-[Nunito] placeholder:text-base placeholder:font-normal"
              />
              <span className="absolute inset-y-0 right-0 top-1 flex items-center pr-3 filter-none">
                <img src={Search} alt="" className='filter-none' />
              </span>
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="">
                <a href="#" className="hover:text-gray-500 font-[Nunito] font-bold">Restaurants</a>
              </div>
              <div className="">
                <a href="#" className="hover:text-gray-500 font-[Nunito] font-bold">Deals</a>
              </div>
              <span className='w-[2px] bg-[#EDEEF2] h-full'>
              </span>
              <div className="">
                <a href="#" className="hover:text-gray-500 font-[Nunito] font-bold">My Orders</a>
              </div>
              {/* <div className=''>
              <Badge count={4} color='#4E60FF'>
                <Avatar shape="square" src={Cart} style={{ backgroundColor: '#F3F4FF', padding: '7px', cursor: 'pointer', borderRadius: '10px' }} />
              </Badge>
            </div> */}
              {/* <div className="">
            <span className="relative ">
              <span className='min-h-12 min-w-12 bg-[#F3F4FF] rounded-md '>
                <img src={Cart} alt="" className="bg-[#F3F4FF] rounded-md h-6 w-6 cursor-pointer p-1" />
              </span>
              <span className="absolute -top-3 -right-2 bg-[#4E60FF] text-white rounded-full px-1 text-xs">
                3
              </span>
            </span>
          </div> */}
              {/* <div className=''>
              <Avatar shape="square" src={Profile} style={{ cursor: 'pointer', border: '2px solid #EDEEF2', borderRadius: '10px' }} />
            </div> */}
              {/* <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-white hover:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div> */}
            </div>
            <div className='flex items-center space-x-4'>
              <div className=''>
                <Badge count={4} color='#4E60FF'>
                  <Avatar shape="square" src={Cart} style={{ backgroundColor: '#F3F4FF', padding: '7px', cursor: 'pointer', borderRadius: '10px' }} />
                </Badge>
              </div>
              <div className=''>
                <Avatar shape="square" src={Profile} style={{ cursor: 'pointer', border: '2px solid #EDEEF2', borderRadius: '10px' }} />
              </div>
              <span className='lg:hidden w-[2px] bg-[#EDEEF2] h-full'>
              </span>
              <div className='lg:hidden'>
                <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
                  <Avatar shape="square" src={Menu} style={{ backgroundColor: '#F3F4FF', padding: '7px', cursor: 'pointer', borderRadius: '10px' }} />
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
