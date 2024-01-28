
import { api } from "../../api";
export const login = (user) => {
  return new Promise(async (resolve, reject) => {
    await api()
      .post(`/auth/login`, { ...user })
      .then(response => {
        if (response?.data.success) {
          localStorage.setItem("token", response?.data.token);
          localStorage.setItem("isAuth", true);
        }
        resolve("Logged In Successfull!");
      })
      .catch(error => {
        if (typeof error?.response?.data?.error === 'string') {
          // Case: Invalid credentials
          reject(error.response.data.error)
        } else if (typeof error?.response?.data?.error === 'object') {
          // Case: All error messages
          const formattedErrors = Object.keys(error.response.data.error).map((field) => {
            return `${field.charAt(0).toUpperCase() + field.slice(1)}: ${error.response.data.error[field]}`;
          });
          reject(formattedErrors.join(', '))
        } else {
          reject('Something Went Wrong')
        }
      });
  });
};

export const register = (user) => {
  return new Promise(async (resolve, reject) => {
    await api()
      .post(`/auth/register`, { ...user })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAuth", true);
        }
        resolve("Registered In Successfull!");
      })
      .catch(error => {
        if (typeof error.response.data.error === 'string') {
          // Case: Invalid credentials
          reject(error.response.data.error)
        } else if (typeof error.response.data.error === 'object') {
          // Case: All error messages
          const formattedErrors = Object.keys(error.response.data.error).map((field) => {
            return `${field.charAt(0).toUpperCase() + field.slice(1)}: ${error.response.data.error[field]}`;
          });
          reject(formattedErrors.join(', '))
        } else {
          reject('Something Went Wrong')
        }
      });
  });
};

export const logout = () => {
  return new Promise(async (resolve, reject) => {
    await api()
      .get(`/auth/logout`)
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAuth", false);
        }
        resolve("Logged Out Successfully!")
      })
      .catch(error => {
        if (typeof error.response.data.error === 'string') {
          reject(error.response.data.error)
        }
        reject('Something Went Wrong');
      });
  });
}