import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import { useNavigate, Link } from 'react-router-dom';
import Alert from './common/Alert';
const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState(false);
  const { state, setState } = useLoginContext();
  const navigate = useNavigate();
  const handleChange = e => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      {alert && <Alert type={alert?.type} message={alert?.message} />}
      <div className='max-w-md w-full p-6 space-y-6 bg-white shadow-md hover:shadow-lg rounded-md'>
        <div className='text-3xl font-extrabold text-gray-800'>Sign Up</div>
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
              className='mt-1 p-2 w-full border rounded-md hover:border-blue-500'
              required
              value={user.email}
              onChange={handleChange}
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
              className='mt-1 p-2 w-full border rounded-md hover:border-blue-500'
              required
              value={user.password}
              onChange={handleChange}
              placeholder='min. 8 characters'
            />
          </div>
          <button
            type='button'
            className='w-full px-4 py-2 text-white bg-blue-500 rounded-md'
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <div className='text-sm text-gray-500 flex justify-center'>
            <Link to='/login' className='text-sm text-blue-500'>
              Log in?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
