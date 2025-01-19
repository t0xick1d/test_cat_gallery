import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from '../../component/itemList/ItemList';
import { RootState } from '../../redux-store/store';

const Liked: React.FC = () => {
   const likeCatList = useSelector((state: RootState) => state.cat.likedCat);
   return (
      <div className="flex items-center flex-col p-5">
         <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
            {likeCatList.map((e) => {
               return <ItemList key={e.id} catItem={e} url={e.url} unLike={true} />;
            })}
         </ul>
      </div>
   );
};

export default Liked;
