import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './component/NavBar/NavBar.tsx';
import Search from './pages/search/Serch.tsx';
import Liked from './pages/liked/Liked.tsx';

function App(): React.FC {
   return (
      <div className="App">
         <NavBar />
         <div className="bg-zinc-300">
            <Routes>
               <Route path="/">
                  <Route path="/search" element={<Search />} />
                  <Route index path="/liked" element={<Liked />} />
                  <Route path="/*" element={<div>404 Error</div>} />
               </Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
