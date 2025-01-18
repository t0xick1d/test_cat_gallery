import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetCatByNameQuery, useGetCatForBreedQuery } from '../../redux-store/catSlice/catApi';
import ItemList from '../../component/itemList/ItemList';
import Spinner from '../../component/Spinner/Spiner';

const Search: React.FC = () => {
   const { data, error, isLoading } = useGetCatByNameQuery('');
   const [inputSearch, setInputSearch] = useState('');
   const [value] = useDebounce(inputSearch, 1000);
   const {
      data: dataBreed,
      error: errorBreed,
      isLoading: isLoadingBreed,
   } = useGetCatForBreedQuery(value);
   if (isLoading && isLoadingBreed) {
      return <Spinner />;
   }
   if (error && errorBreed) {
      return <div>Error </div>;
   }
   if (!isLoading && inputSearch === '') {
      return (
         <div className="flex items-center flex-col p-5">
            <form className="w-1/2 ">
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path
                           stroke="currentColor"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="search"
                     className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search"
                     value={inputSearch}
                     onChange={(e) => setInputSearch(e.target.value)}
                     required
                  />
               </div>
            </form>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
               {Array.isArray(data) &&
                  data.map((e) => {
                     return (
                        <ItemList key={e.id} catItem={e.breeds[0]} url={e.url} unLike={false} />
                     );
                  })}
            </ul>
         </div>
      );
   }
   if (
      !isLoadingBreed &&
      inputSearch.length > 0 &&
      Array.isArray(dataBreed) &&
      dataBreed?.length !== 0
   ) {
      return (
         <div className="flex items-center flex-col p-5">
            <form className="w-1/2 ">
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path
                           stroke="currentColor"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="search"
                     className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search"
                     value={inputSearch}
                     onChange={(e) => setInputSearch(e.target.value)}
                     required
                  />
               </div>
            </form>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
               {Array.isArray(dataBreed) &&
                  dataBreed.map((e) => {
                     return <ItemList key={e.id} catItem={e} url={e.image.url} unLike={false} />;
                  })}
            </ul>
         </div>
      );
   }
   if (
      !isLoadingBreed &&
      inputSearch.length > 0 &&
      Array.isArray(dataBreed) &&
      dataBreed?.length === 0
   ) {
      return (
         <div className="flex items-center flex-col p-5">
            <form className="w-1/2 ">
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path
                           stroke="currentColor"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="search"
                     className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search"
                     value={inputSearch}
                     onChange={(e) => setInputSearch(e.target.value)}
                     required
                  />
               </div>
            </form>
            <p className="text-red-600 text-4xl font-extrabold text-gray-900 p-15 dark:text-white flex flex-col item-center ">
               Nothing found
            </p>
         </div>
      );
   }
   return <div></div>;
};

export default Search;
