import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Careers = () => {
  return (
    <table className="nav-list">
    <tr>
    <td className="dropdown">
      <ul className="dropdown-menu">
        <li>Jobs</li>
      </ul>
            
    </td>
    </tr>
    </table>
  );
};
  
export default Careers;