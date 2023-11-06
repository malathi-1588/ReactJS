import React from 'react';
// import ReactDom from 'react-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';

function App()
{
    return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home /> }/>
        <Route path='/about'element={<About />}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      </>
    );
}

export default App;