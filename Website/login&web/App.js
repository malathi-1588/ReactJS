import './App.css';
import LoginPage from './LoginPage';
import NavigBar from './NavigBar';
import Home from './Pages.js/Home';
import Features from './Pages.js/Features';
import Pricing from './Pages.js/Pricing';
import NavPage from './Pages.js/NavPage';
import CalcPage from './Pages.js/CalcPage';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <NavigBar/>
        <BrowserRouter>
        <Routes>
        <Route path='/navpage' element={<NavPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/calcpage' element={<CalcPage/>}></Route>
        <Route path='/Loginpage' element={<LoginPage/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;