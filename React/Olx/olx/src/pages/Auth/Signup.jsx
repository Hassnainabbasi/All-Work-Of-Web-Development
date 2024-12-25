import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
      <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-80"
              src="https://www.shutterstock.com/image-illustration/background-registration-login-form-green-260nw-2406920449.jpg"
              height={1080}
              width={1920}
              alt="Background"
            />
          </div>
    
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <div className="bg-white p-5 rounded-lg shadow-2xl w-full max-w-md">
              <div className="flex justify-center mb-2">
                <div className="bg-green-500 rounded-full p-2">
                  <i className="fas fa-user text-white text-4xl"></i>
                </div>
              </div>
              <h2 className="text-center text-3xl font-extrabold mb-8">Welcome</h2>
              <form>
              <div className="mb-5">
                  <label className="block text-gray-800 font-semibold mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    Username
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    type='text'
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-800 font-semibold mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-800 font-semibold mb-2">
                    <i className="fas fa-lock mr-2"></i>
                    Password
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="password"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 text-white rounded-full px-8 py-3 hover:bg-green-600 transition duration-300"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mt-6">
                <Link to={'/login'} className="text-blue-500 hover:underline" href="#">
                  Already Have an Account? Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}
