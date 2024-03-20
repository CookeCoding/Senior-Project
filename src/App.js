import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import Help  from './components/Help';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Waitlist from './components/waitlist';
import Add from './components/add'; // Updated to use correct casing

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'></h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='Help' element={<Help />} />
          <Route path='/account'element={  <ProtectedRoute> <Account /></ProtectedRoute>
            }
          />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/Add' element={<Add />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
