import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LogIn />}/>
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/player' element={<Player />}/>
        <Route exact path='/' element={<Netflix />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
