import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './common/Alert';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
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
    // dispatch({ type: 'TOGGLE_LOGIN' });
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

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      {alert && <Alert type={alert?.type} message={alert?.message} />}
      <div className='max-w-md w-1/2 p-6 space-y-6 bg-white shadow-md hover:shadow-lg rounded-md'>
        <div className='text-3xl font-extrabold text-gray- 1000'>Login</div>
        <label className='block text-sm font-medium text-gray-500'>
          Sign in with your data that you entered during your registration
        </label>
        <form className='space-y-4'>
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
            <input
              type='password'
              id='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              className='mt-1 p-2 w-full border rounded-md hover:border-blue-500'
              required
              placeholder='min. 8 characters'
            />
          </div>
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
          <a href='#' className='text-sm flex justify-center text-blue-500'>
            Forgot password?
          </a>
        </form>
        <div className='text-sm text-gray-500 flex justify-center'>
          Don't have an account?
          <Link to='/signup' className='text-sm text-blue-500'>
            Sign up
          </Link>
        </div>
      </div>
      <div className='max-w-md w-1/2 h-full p-6 space-y-6 bg-white shadow-md hover:shadow-lg rounded-md'>
        Hi ded
      </div>
    </div>
  );
};

export default Login;
