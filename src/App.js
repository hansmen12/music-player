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

function App() {
  const [music, setMusic] = useState();
  return (
    <musicContext.Provider value={{music, setMusic}}>
    <div className="w-full h-[100vh] font-quicksand">
      <HashRouter>
        <Routes>
                   
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="/artist" element={<Layout />}>
            <Route index element={<Artist />} />
            <Route path='/artist/:id' element={<Tracks />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
    </musicContext.Provider>
  );
}

export default App;
