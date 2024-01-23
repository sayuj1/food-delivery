import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './common/Alert';
import LandingPage from './common/LandingPage';
import AuthForm from './AuthForm';

const Login = () => {

  return (
    <AuthForm title="Login" />
  );
};

export default Login;
