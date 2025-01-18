import React from 'react';
import { useGetCatByNameQuery } from '../../redux-store/catSlice/catApi.ts';
import ItemList from '../../component/itemList/ItemList.tsx';

const Search: React.FC = () => {
   const { data, error, isLoading } = useGetCatByNameQuery('');
   if (!isLoading) {
      return (
         <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
            {data.map((e) => {
               return <ItemList key={e._id} catItem={e} unLike={false} />;
            })}
         </ul>
      );
   }
};

export default Search;
