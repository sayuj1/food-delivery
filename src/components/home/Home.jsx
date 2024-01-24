import React from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import Navbar from '../common/Navbar';
import { Avatar } from 'antd';
import DiscountSection from './DiscountSection';
import CategorySection from './CategorySection';
import ResturantSection from './ResturantSection';

const restaurantsData = [
  {
    id: 1,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: false,
  },
  {
    id: 4,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: false,
  },
  {
    id: 5,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: false,
  },
  {
    id: 6,
    name: 'Royal Sushi House',
    time: '30-40',
    minsum: '$32',
    categories: ['Sushi'],
    image: '/assets/profile.png',
    isFeatured: false,
  },
];
const discountData = [
  {
    id: 1,
    title: 'All Deserts',
    subTitle: 'Deserty',
    percentage: '20',
    image: '/assets/shoppingBag.svg',
    bg: '#87CEEB',
  },
  {
    id: 2,
    title: 'Big Burgers',
    subTitle: 'Foodies',
    percentage: '50',
    image: '/assets/shoppingBag.svg',
    bg: '#FFF5EE',
  },
];
const categories = [
  {
    id: 1,
    title: 'Pizza',
    image: '/assets/shoppingBag.svg',
  },
  {
    id: 2,
    title: 'Burger',
    image: '/assets/shoppingBag.svg',
  },
  {
    id: 3,
    title: 'BBQ',
    image: '/assets/shoppingBag.svg',
  },
  {
    id: 4,
    title: 'Sushi',
    image: '/assets/shoppingBag.svg',
  },
  {
    id: 5,
    title: 'Vegan',
    image: '/assets/shoppingBag.svg',
  },
  {
    id: 6,
    title: 'Desserts',
    image: '/assets/shoppingBag.svg',
  },
];
const Home = () => {
  const { state } = useLoginContext();
  return (
    <React.Fragment>
      {state?.isLoggedIn && <Navbar />}
      <div className='container mx-auto p-4'>
        <DiscountSection discountData={discountData}/>
        <CategorySection categories={categories}/>
        Nearby Resturants
        <br/>
        <ResturantSection restaurantsData={restaurantsData}/>
      </div>
    </React.Fragment>
  );
};

export default Home;
