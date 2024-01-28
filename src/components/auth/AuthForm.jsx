import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../common/Alert';
import LandingPageCarousel from './LandingPageCarousel';
import { login, register } from './apis';
import Loader from '../common/Loader';

const AuthForm = props => {
  const navigate = useNavigate();
  const { title } = props;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") navigate('/home');
    // eslint-disable-next-line
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  const [alert, setAlert] = useState(false);

  const handleChange = e => {
    setAlert(false)
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async () => {
    setLoader(true);
    try {
      await login(user);
      navigate('/home');
    } catch (error) {
      setAlert({
        type: 'error',
        message: error,
      });
    } finally {
      setLoader(false);
    }
  };

  const handleSignup = async () => {
    setLoader(true);
    try {
      await register(user);
      navigate('/home');
    } catch (error) {
      setAlert({
        type: 'error',
        message: error,
      });
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 '>
      <div className='min-h-screen  flex '>
        <div className='grid grid-cols-1 lg:grid-cols-12 w-full'>
          {alert && <Alert type={alert?.type} message={alert?.message} />}

          <div className='col-span-12 lg:col-span-5  h-full p-6 space-y-6 bg-white shadow-md hover:shadow-lg rounded-md'>
            <img
              src={'assets/foodDeliveryLogo.svg'}
              alt='food-delivery-logo'
              className='md:mx-[120px] mb-24'
            />
            <div className='md:mx-[120px] items-center h-3/4 mt-24'>
              <div className='text-4xl font-bold text-gray-1000 mb-5' data-testid='title'>
                {title}
              </div>

              <form className='space-y-8'>
                {title === 'Login' && (
                  <label className='block text-sm font-medium text-gray-500'>
                    Sign in with your data that you entered during your
                    registration
                  </label>
                )}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-500'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    className='mt-1 p-2 w-full border rounded-md hover:border-blue-500'
                    required
                    placeholder='name@example.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-500'
                  >
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      value={user.password}
                      onChange={handleChange}
                      className='mt-1 p-2 w-full border rounded-md hover:border-blue-500'
                      required
                      placeholder='your password'
                    />
                    <span
                      className='absolute inset-y-0 right-0 flex items-center pr-3'
                      onClick={handleTogglePassword}
                    >
                      {!showPassword ? (
                        <img src={'assets/eye.svg'} alt='Eye' />
                      ) : (
                        <img src={'assets/hiddenEye.svg'} alt='Hidden Eye' />
                      )}
                    </span>
                  </div>
                </div>
                {title === 'Login' ? (
                  <>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='keepLoggedIn'
                          className='mr-2'
                        />
                        <label
                          htmlFor='keepLoggedIn'
                          className='text-sm font-medium text-gray-500'
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='w-full px-4 py-2 text-white bg-[#4E60FF] rounded-md'
                      onClick={handleLogin}
                      data-testid="login-button"
                    >
                      {loader ? <span className='flex justify-center '><Loader width="30px" height="30px" marginTop="3px" /> LoggingIn...</span> : <span>Login</span>}
                    </button>
                    {/* remove the below line of code once you have a valid href id */}
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a
                      href='#'
                      className='text-sm flex justify-center text-[#4E60FF] font-bold'
                    >
                      Forgot password?
                    </a>
                  </>
                ) : (
                  <button
                    type='button'
                    className='w-full px-4 py-2 text-white bg-[#4E60FF] rounded-md h-[40px]'
                    onClick={handleSignup}
                    data-testid="signup-button"
                  >
                    {loader ? <span className='flex justify-center '><Loader width="30px" height="30px" marginTop="3px" /> Signing Up</span> : <span>Sign Up</span>}
                  </button>
                )}
              </form>
            </div>
            {title === 'Login' ? (
              <div className='text-sm text-gray-500 flex justify-center items-end  '>
                Don't have an account?
                <Link to='/signup' className='text-sm text-[#4E60FF] font-bold'>
                  &nbsp; Sign up
                </Link>
              </div>
            ) : (
              <div className='text-sm text-gray-500 flex justify-center'>
                Have an account?
                <Link to='/login' className='text-sm text-[#4E60FF] font-bold'>
                  &nbsp; Login
                </Link>
              </div>
            )}
          </div>
          <div className='hidden lg:block col-span-7 bg-[#697BFF]'>
            <LandingPageCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
