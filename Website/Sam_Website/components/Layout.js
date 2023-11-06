import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import logoImage from "./logo.png";
import logoImage2 from "./logo2.png";

const Layout = () => {
  const [showWhoweareDropdown, setShowWhoweareDropdown] = useState(false);
  const [showWhatwedoDropdown, setShowWhatwedoDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showCareersDropdown, setShowCareersDropdown] = useState(false);
  const [showInvestorsDropdown, setShowInvestorsDropdown] = useState(false);

  const toggleWhoweareDropdown = () => {
    setShowWhoweareDropdown(!showWhoweareDropdown);
    setShowWhatwedoDropdown(false);
    setShowNewsDropdown(false);
    setShowCareersDropdown(false);
    setShowInvestorsDropdown(false);
  };

  const toggleWhatwedoDropdown = () => {
    setShowWhatwedoDropdown(!showWhatwedoDropdown);
    setShowWhoweareDropdown(false);
    setShowNewsDropdown(false);
    setShowCareersDropdown(false);
    setShowInvestorsDropdown(false);
  };

  const toggleNewsDropdown = () => {
    setShowNewsDropdown(!showNewsDropdown);
    setShowWhoweareDropdown(false);
    setShowWhatwedoDropdown(false);
    setShowCareersDropdown(false);
    setShowInvestorsDropdown(false);
  };

  const toggleInvestorsDropdown = () => {
    setShowInvestorsDropdown(!showInvestorsDropdown);
    setShowWhoweareDropdown(false);
    setShowNewsDropdown(false);
    setShowWhatwedoDropdown(false);
    setShowCareersDropdown(false);
  };

  const toggleCareersDropdown = () => {
    setShowCareersDropdown(!showCareersDropdown);
    setShowWhoweareDropdown(false);
    setShowNewsDropdown(false);
    setShowWhatwedoDropdown(false);
    setShowInvestorsDropdown(false);
  };
  return (
    <>
      <nav>
      <table className="nav-list">
        <tr>
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </div>
          <td className="dropdown">
            <Link to="/" className="nav-link" onClick={toggleWhoweareDropdown}>Who we are</Link>
          </td>
          <td className="dropdown">
            <Link to="/Whatwedo" className="nav-link" onClick={toggleWhatwedoDropdown}>What we do</Link>
          </td>
          <td className="dropdown">
            <Link to="/News" className="nav-link" onClick={toggleNewsDropdown}>News</Link>
          </td>
          <td className="dropdown">
            <Link to="/Investors" className="nav-link" onClick={toggleInvestorsDropdown}>Investors</Link>
          </td>
          <td className="dropdown">
            <Link to="/Careers" className="nav-link" onClick={toggleCareersDropdown}>Careers</Link>
          </td>
          <div className="logo-container">
            <img src={logoImage2} alt="Logo" className="logo-image" />
          </div>
        </tr>
      </table>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;