import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white p-8 rounded w-96">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 mb-4 outline-none border border-gray-400 rounded w-full"
        />

        <input
          type="password"
          placeholder="Your Password"
          className="p-2 mb-4 outline-none border border-gray-400 rounded w-full"
        />

        <Link className="text-blue-500 block mb-4">
          Forgot password?
        </Link>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-full px-6 py-2"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-gray-700">
          If You Don't Have An Account{' '}
          <Link to='/auth/register' className="text-blue-500">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
