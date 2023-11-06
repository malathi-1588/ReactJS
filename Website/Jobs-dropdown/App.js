// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import HotJobsPage from "./components/HotJobsPage";
import InformationCenterPage from "./components/InformationCenterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HotJobsPage name = "Hot Jobs" />}/>
          <Route path="FAQs" element={<InformationCenterPage name = "Information Center" />}/>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;