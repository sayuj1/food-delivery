import React, { useState } from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import Navbar from '../common/Navbar';
import DiscountSection from './DiscountSection';
import CategorySection from './CategorySection';
import RestaurantSection from './RestaurantSection';


const Home = () => {
  const restaurantsData = [
    {
      id: 1,
      name: 'Royal Sushi House',
      time: '30-40',
      minsum: '$32',
      categories: [
        {
          title: 'Sushi',
          image: 'assets/sushi.png',
        },
      ],
      image: 'assets/royal-sushi-house.png',
      isFeatured: true,
      cartValue: 0,
    },
    {
      id: 2,
      name: 'Burgers & Pizza',
      time: '40-60',
      minsum: '$24',
      categories: [
        {
          title: 'Burger',
          image: 'assets/sm-burger.png',
        },
        {
          title: 'Pizza',
          image: 'assets/pizza.png',
        },
      ],
      image: 'assets/burder-pizza.png',
      isFeatured: true,
      cartValue: 2,
    },
    {
      id: 3,
      name: 'Ninja Sushi',
      time: '20-40',
      minsum: '$40',
      categories: [
        {
          title: 'Sushi',
          image: 'assets/sushi.png',
        },
      ],
      image: 'assets/ninja-sushi.png',
      isFeatured: false,
      cartValue: 0,
    },
    {
      id: 4,
      name: 'Sushi Master',
      time: '60-70',
      minsum: '$49',
      categories: [
        {
          title: 'Sushi',
          image: 'assets/sushi.png',
        },
      ],
      image: 'assets/sushi-master.png',
      isFeatured: false,
      cartValue: 0,
    },
    {
      id: 5,
      name: 'Japanese Sushi',
      time: '30-50',
      minsum: '$104',
      categories: [
        {
          title: 'Sushi',
          image: 'assets/sushi.png',
        },
      ],
      image: 'assets/japanese-sushi.png',
      isFeatured: false,
      cartValue: 0,
    },
    {
      id: 6,
      name: 'Kobe',
      time: '20-30',
      minsum: '$57',
      categories: [
        {
          title: 'Sushi',
          image: 'assets/sushi.png',
        },
      ],
      image: 'assets/kobe.png',
      isFeatured: false,
      cartValue: 0,
    },
  ];
  const discountData = [
    {
      id: 1,
      title: 'All Deserts',
      subTitle: 'Deserty',
      percentage: '20',
      image: 'assets/cupcake.png',
      bg: '#F3F4FF',
    },
    {
      id: 2,
      title: 'Big Burgers',
      subTitle: 'Foodies',
      percentage: '50',
      image: 'assets/burger.png',
      bg: '#FFF5EE',
    },
  ];
  const [categories,setCategories] = useState([
    {
      id: 1,
      title: 'Pizza',
      image: 'assets/pizza.png',
      selected: false
    },
    {
      id: 2,
      title: 'Burger',
      image: 'assets/sm-burger.png',
      selected: true
    },
    {
      id: 3,
      title: 'BBQ',
      image: 'assets/bbq.png',
      selected: false
    },
    {
      id: 4,
      title: 'Sushi',
      image: 'assets/sushi.png',
      selected: true
    },
    {
      id: 5,
      title: 'Vegan',
      image: 'assets/vegan.png',
      selected: false
    },
    {
      id: 6,
      title: 'Desserts',
      image: 'assets/sm-cupcake.png',
      selected: false
    },
  ]);
  const { state } = useLoginContext();
  return (
    <React.Fragment>
      <div className='sticky top-0 z-50 bg-white'>
        {state?.isLoggedIn && <Navbar />}
      </div>
      <div className='md:w-[90%] mx-auto p-4'>
        <DiscountSection discountData={discountData} />
        <CategorySection categories={categories} setCategories={setCategories} />
        <RestaurantSection restaurantsData={restaurantsData} />
      </div>
    </React.Fragment>
  );
};

export default Home;
