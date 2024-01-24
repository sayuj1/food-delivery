import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useLoginContext } from './contexts/LoginContext';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const PrivateRoute = ({ state, children }) => {
  if (state?.isLoggedIn) return children;
  return <Navigate to='/login' replace />;
};

const App = () => {
  const { state } = useLoginContext();
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute state={state}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/home'
          element={
            <PrivateRoute state={state}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
