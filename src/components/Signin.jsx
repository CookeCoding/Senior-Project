import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  return(
  
  <div className= 'w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 '>
  <div>
    <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
    <img className="absolute left-0 top-0 h-16 w-16 object-contain" src="/images/download.jpg" alt="" />
    <p className='py-2'>
      Don't have an account yet?{' '}
      <Link to='/signup' className='underline'>
        Sign up.
      </Link>
    </p>
  </div>
  <form onSubmit={handleSubmit}>
    <div className='flex flex-col py-2'>
      <label className='py-2 font-medium'>Email Address</label>
      <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
    </div>
    <div className='flex flex-col py-2'>
      <label className='py-2 font-medium'>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
    </div>
    <button className='border border-gre  bg-purple-500 hover:bg-purple-500 w-full p-4 my-2 text-white'>
      Sign In
    </button>
    <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2   text-white'>Google 
    </button>

  </form>
</div>
);
};

export default Signin;
