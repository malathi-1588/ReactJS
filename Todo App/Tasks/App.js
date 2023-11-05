// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import ToDoAR from "./components/ToDoAR";
import ToDoWork from "./components/ToDoWork";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ToDoAR name = "Academics And Research" />}/>
          <Route path="work" element={<ToDoWork name = "Work" />}/>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;