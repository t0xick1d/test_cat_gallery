import React from 'react';
import { addToLiked, removeToLiked } from '../../redux-store/catSlice/catSlice';
import { useDispatch } from 'react-redux';
import { CatI } from '../../types/CatInterface';

interface MyComponentProps {
   catItem: CatI;
   url: string;
   unLike: boolean;
}

const ItemList: React.FC<MyComponentProps> = ({ catItem, url, unLike }) => {
   const dispatch = useDispatch();

   return (
      <div className="max-w-sm p-5 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
         <img className="h-auto max-w-full rounded-lg" alt="" src={url} />
         <div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {catItem.name}
            </div>

            {unLike ? (
               <button
                  onClick={() => {
                     dispatch(removeToLiked(catItem));
                  }}
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
               >
                  remove
               </button>
            ) : (
               <button
                  onClick={() => {
                     dispatch(addToLiked({ ...catItem, url }));
                  }}
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
               >
                  like
               </button>
            )}
         </div>
      </div>
   );
};

export default ItemList;
