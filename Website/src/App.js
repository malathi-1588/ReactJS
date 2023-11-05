import React from 'react';
import './App.css';
import NavigBar from './NavigBar';
import Home from './Pages.js/Home';
import Features from './Pages.js/Features';
import Pricing from './Pages.js/Pricing';
import NavPage from './Pages.js/NavPage';
import CalcPage from './Pages.js/CalcPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigBar/>
      <Routes>
        <Route path='/navpage' element={<NavPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/calcpage' element={<CalcPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
