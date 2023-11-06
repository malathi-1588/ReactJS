import './App.css';
import LoginPage from './LoginPage';
import NavigBar from './NavigBar';
import Home from './Pages.js/Home';
import Features from './Pages.js/Features';
import Pricing from './Pages.js/Pricing';
import NavPage from './Pages.js/NavPage';
import CalcPage from './Pages.js/CalcPage';
import A1 from './Pages.js/A1';
import A2 from './Pages.js/A2';
import A3 from './Pages.js/A3';
import A4 from './Pages.js/A4';
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

        <Route path='/action1' element={<A1/>}></Route>
        <Route path='/action2' element={<A2/>}></Route>
        <Route path='/action3' element={<A3/>}></Route>
        <Route path='/action4' element={<A4/>}></Route>

        <Route path='/Loginpage' element={<LoginPage/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;