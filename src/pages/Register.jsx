import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './../components/layouts/Layout';
import Login from './Login';

const Register = () => {
  return (
    <Layout>
      <div className="bg-gray-200 lg:px-8 px-5 w-full flex justify-center items-center py-30 mb-10">
        {/**Login Form */}
        <div className="max-w-md w-full rounded-md px-8 py-7 shadow-md bg-white">
          <h1 className="text-2xl text-gray-800 font-bold text-center">
            Register
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm text-gray-800">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm text-gray-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm text-gray-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm text-gray-800">
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Confirm Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              <Link className="bg-green-400 px-5 py-2 w-full text-md rounded-md text-gray-800 text-center">
                Register
              </Link>
            </div>
            <div className="text-center text-sm text-gray-800">
              Already have an Account?{' '}
              <Link to={'/Login'} className="hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register