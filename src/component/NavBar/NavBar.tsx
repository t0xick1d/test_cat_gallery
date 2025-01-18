import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
   return (
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
               <img
                  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f640.svg"
                  class="h-8"
                  alt="Flowbite Logo"
               />
               <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Cat Gallery
               </span>
            </a>
            <div class="d-flex p-5 rounded-md shadow-sm" role="group">
               <Link
                  to="/search"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
               >
                  Search
               </Link>
               <Link
                  to="/liked"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
               >
                  Liked
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
