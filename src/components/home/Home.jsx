import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import DiscountSection from './DiscountSection';
import CategorySection from './CategorySection';
import RestaurantSection from './RestaurantSection';
import { getCategories, getDiscounts, getRestaurants } from './api';
import Alert from '../common/Alert';


const Home = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [alert, setAlert] = useState(false);

  const fetchRestaurants = async () => {
    getRestaurants().then((data) => {
      setRestaurantsData(data);
    }).catch((error) => {
      setAlert({
        type: 'error',
        message: error,
      });
    })
  }

  const fetchDiscounts = async () => {
    getDiscounts().then((data) => {
      setDiscountData(data);
    }).catch((error) => {
      setAlert({
        type: 'error',
        message: error,
      });
    })
  }

  const fetchCategories = async () => {
    getCategories().then((data) => {
      setCategories(data);
    }).catch((error) => {
      setAlert({
        type: 'error',
        message: error,
      });
    })
  }

  useEffect(() => {
    fetchRestaurants();
    fetchDiscounts();
    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      {alert && <Alert type={alert?.type} message={alert?.message} />}
      <div className='sticky top-0 z-50 bg-white'>
        <Navbar />
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
