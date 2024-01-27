import { api } from "../../api";

export const getRestaurants = () => {
  return new Promise(async (resolve, reject) => {
    await api().get('/restaurants/view').then(response => {
      resolve(response.data);
    })
      .catch(error => {
        if (typeof error.response.data.message === 'string') {
          reject(error.response.data.message)
        }
        reject('Something Went Wrong')

      });
  });
}

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    await api().get('/restaurants/viewCategories').then(response => {
      resolve(response.data);
    })
      .catch(error => {
        if (typeof error.response.data.message === 'string') {
          reject(error.response.data.message)
        }
        reject('Something Went Wrong')

      });
  });
}

export const getDiscounts = () => {
  return new Promise(async (resolve, reject) => {
    await api().get('/restaurants/viewDiscounts').then(response => {
      resolve(response.data);
    })
      .catch(error => {
        if (typeof error.response.data.message === 'string') {
          reject(error.response.data.message)
        }
        reject('Something Went Wrong')

      });
  });
}