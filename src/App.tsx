import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './component/NavBar/NavBar';
import Search from './pages/search/Serch';
import Liked from './pages/liked/Liked';

function App() {
   return (
      <div className=" w-screen h-full bg-zinc-300">
         <NavBar />
         <div>
            <Routes>
               <Route path="/">
                  <Route index element={<Navigate to="/search" replace />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/liked" element={<Liked />} />
                  <Route path="/*" element={<div>404 Error</div>} />
               </Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
