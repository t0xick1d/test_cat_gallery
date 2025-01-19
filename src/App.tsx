import { Route, Routes } from 'react-router-dom';

import NavBar from './component/NavBar/NavBar';
import Search from './pages/search/Serch';
import Liked from './pages/liked/Liked';

function App() {
   return (
      <div className=" w-screen h-full bg-zinc-300">
         <NavBar />
         <div>
            <Routes>
               <Route path="/" element={<Search />}>
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
