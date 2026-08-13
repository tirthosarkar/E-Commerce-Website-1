import React from 'react'
import Layout from './../components/layouts/Layout';

const Login = () => {
  return (
    <Layout>
      <div className="bg-gray-200 w-full flex justify-center items-center py-300">
        {/**Login Form */}
        <div className="max-w-md w-full rounded-md px-5 py-4 shadow-md bg-white">
          <h1 className="text-2xl text-gray-800 font-bold text-center">
            Login
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export default Login