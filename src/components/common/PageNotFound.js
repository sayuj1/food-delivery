import React from 'react';
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import Page404 from './Page404';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      title="404"
      icon={<Page404 width="50%" height="50%" />}
      subTitle="Sorry, the page you visited does not exist."
      extra={<button className='px-4 py-2 text-white bg-[#4E60FF] rounded-md' onClick={() => navigate('/')}>Back Home</button>}
    />
  )
}
