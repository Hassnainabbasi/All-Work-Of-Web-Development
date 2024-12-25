import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-6 py-3">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <img
          src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
          className="h-20"
          alt="Company Logo"
        />

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex items-center p-4 md:p-0 mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="py-2 px-6 bg-transparent text-black border-2 border-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 focus:outline-none"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link to={'/post-add'}
                className="py-2 px-6 bg-transparent text-black border-2 border-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 focus:outline-none"
              >
                Post Ads
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-6 bg-transparent text-black border-2 border-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 focus:outline-none"
              >
                Chats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
