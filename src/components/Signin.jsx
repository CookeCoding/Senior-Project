import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider, reauthenticateWithPopup } from "firebase/auth";

const auth = getAuth();

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  // Google and Outlook sign-in handler
  const handleOAuthSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate('/account');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  // Outlook provider for re-authentication
  const outlookProvider = new OAuthProvider('microsoft.com');
  
  const handleOutlookReauthenticate = () => {
    reauthenticateWithPopup(auth.currentUser, outlookProvider)
      .then((result) => {
        // Handle re-authentication success
        const credential = outlookProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
      })
      .catch((error) => {
        // Handle re-authentication error
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2">
            <div>
              <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
              <p className="py-2">
                Don't have an account yet?{' '}
                <Link to="/signup" className="underline">
                  Sign up.
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Email Address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-3"
                  type="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-3"
                  type="password"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2">
                Sign In
              </button>
              <button 
                onClick={() => handleOAuthSignIn(new GoogleAuthProvider())}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Sign in with Google
              </button>
              <button 
                onClick={() => handleOAuthSignIn(outlookProvider)}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Sign in with Outlook
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center bg-gradient-to-r from-sky-700 to-yellow-100">
        <img
          src="https://imgur.com/bxKmrJF.jpg"
          alt="emmits"
          className="object-cover"
          style={{ maxWidth: '50%', maxHeight: '50%' }}
        />
      </div>
    </div>
  );
};

export default Signin;