import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Navbar from './NavBar';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div>
      <Navbar />
      <div className='fixed bottom-1 left-4 max-w-[600px] mx-auto my-16 p-4 '>
        <h1 className='bottom-0 left-0 text-3xl font-bold py-4'>Account</h1>
        <p className='text-xl'> User Email: {user && user.email}</p>
  
        <button onClick={handleLogout} className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Logout
        </button>
      </div>
    
      <div className="flex justify-center items-center h-screen">
  <div className="flex justify-center space-x-4">
    <Link to="/add">
      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 border-b-4 border-green-700 hover:border-green-500 rounded">
        Add Furniture
      </button>
    </Link>
    <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 border-b-4 border-red-700 hover:border-red-500 rounded">
      Delete Furniture
    </button>
  </div>
</div>


      
    </div>
  );
};

export default Account;
