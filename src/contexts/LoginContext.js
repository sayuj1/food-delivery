import React, { createContext, useState,useContext } from 'react';

const LoginContext = createContext();

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false,
  users: [],
};

const LoginProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <LoginContext.Provider value={{ state, setState }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  return useContext(LoginContext)
};

export { LoginProvider, useLoginContext };
