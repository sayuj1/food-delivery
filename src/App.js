import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useLoginContext } from './contexts/LoginContext';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const PrivateRoute = ({ state, children }) => {
  if (state?.isLoggedIn) return children;
  return <Navigate to='/login' replace />;
};

const App = () => {
  const { state } = useLoginContext();
  return (
    <Router>
      <Routes>
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
