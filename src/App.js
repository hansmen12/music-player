import React, {useState, createContext } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Layout from './layout/Layout/Layout'
import Dashboard from './layout/Dashboard/Dashboard'
import Artist from './layout/Artist/Artist'
import Tracks from './layout/Tracks/Tracks'
import musicContext from './context/musicContext';
import Albums from './layout/Albums/Albums';
import Stations from './layout/Stations/Stations';

function App() {
  const [music, setMusic] = useState();
  const [isVisibleMenu, setIsVisbleMenu] = useState(false);

  return (
    <musicContext.Provider value={{music, setMusic, isVisibleMenu, setIsVisbleMenu}}>
    <div className="w-full h-[100vh] font-quicksand">
      <HashRouter>
        <Routes>
                   
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/:type/:id' element={<Tracks />} />
          </Route>

          <Route path="/artist" element={<Layout />}>
            <Route index element={<Artist />} />
            <Route path='/artist/:type/:id' element={<Tracks />} />
          </Route>

          <Route path="/albums" element={<Layout />}>
            <Route index element={<Albums />} />
            <Route path='/albums/:type/:id' element={<Tracks />} />          
          </Route>

          <Route path="/stations" element={<Layout />}>
            <Route index element={<Stations />} />      
            <Route path='/stations/:type/:id' element={<Tracks />} />    
          </Route>

        </Routes>
      </HashRouter>
    </div>
    </musicContext.Provider>
  );
}

export default App;
