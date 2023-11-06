import React from "react";
import Heading from "./components/heading";
import Label from "./components/label";
import Textbox from "./components/textbox";
// import Submit from "./components/buttons";
import "./components/style.css";
import { useState } from "react";
import Home from "./components/home";

import {Routes,Route} from 'react-router-dom';
import Valid from "./valid";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Valid />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
