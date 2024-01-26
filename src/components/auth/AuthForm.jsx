import React, { useState } from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../common/Alert';
import LandingPage from '../common/LandingPage';

const AuthForm = props => {
  const { title } = props;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  const [alert, setAlert] = useState(false);
  const { state, setState } = useLoginContext();

  const handleChange = e => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLoginToggle = () => {
    //TODO: Keep Me LoggedIn
  };

  const handleLogin = () => {
    const userExists = state.users.some(
      userData =>
        userData.email === user.email && userData.password === user.password
    );

    if (userExists) {
      setState({
        ...state,
        isLoggedIn: true,
      });
      navigate('/home');
    } else {
      setAlert({
        type: 'error',
        message: 'Failed to Login: User does not exist!',
      });
    }
  };

  const handleSignup = () => {
    const userExists = state.users.some(
      userData =>
        userData.email === user.email && userData.password === user.password
    );

    if (userExists) {
      setAlert({
        type: 'error',
        message: 'Failed to Sign Up: User already exists!',
      });
    } else {
      setState({
        ...state,
        users: [...state.users, user],
        isLoggedIn: true,
      });
      navigate('/home');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 '>
      <div className='min-h-screen  flex '>
        <div className='grid grid-cols-1 lg:grid-cols-12 w-full'>
          {alert && <Alert type={alert?.type} message={alert?.message} />}

          <div className='col-span-12 lg:col-span-5  h-full p-6 space-y-6 bg-white shadow-md hover:shadow-lg rounded-md'>
            <img
              src={'assets/foodDeliveryLogo.svg'}
              alt='food-delivery-logo'
              className='md:mx-[120px]'
            />
            <div className='md:mx-[120px] items-center h-3/4 mt-24'>
              <div className='text-4xl font-extrabold text-gray-1000 mb-5'>
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
                      placeholder='min. 8 characters'
                    />
                    <span
                      className='absolute inset-y-0 right-0 flex items-center pr-3'
                      onClick={handleTogglePassword}
                    >
                      {!showPassword ? (
                        <img
                          src={'assets/eye.svg'}
                          alt='Eye'
                        />
                      ) : (
                        <img
                          src={'assets/hiddenEye.svg'}
                          alt='Hidden Eye'
                        />
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
                          onChange={handleLoginToggle}
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
                      className='w-full px-4 py-2 text-white bg-blue-500 rounded-md'
                      onClick={handleLogin}
                    >
                      Log in
                    </button>
                    <a
                      href='#'
                      className='text-sm flex justify-center text-blue-500'
                    >
                      Forgot password?
                    </a>
                  </>
                ) : (
                  <button
                    type='button'
                    className='w-full px-4 py-2 text-white bg-blue-500 rounded-md'
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                )}
              </form>
            </div>
            {title === 'Login' ? (
              <div className='text-sm text-gray-500 flex justify-center'>
                Don't have an account?
                <Link to='/signup' className='text-sm text-blue-500'>
                  Sign up
                </Link>
              </div>
            ) : (
              <div className='text-sm text-gray-500 flex justify-center'>
                Have an account?
                <Link to='/login' className='text-sm text-blue-500'>
                  Login
                </Link>
              </div>
            )}
          </div>
          <div className='hidden lg:block col-span-7 bg-[#697BFF]'>
            <LandingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
