import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Whoweare = () => {
  return (
    <table className="nav-list">
    <tr>
    <td className="dropdown">
      <ul className="dropdown-menu">
        <li>Our Global Organisation</li>
        <li>Our approach</li>
        <li>Technology and collaboration</li>
        <li>Policy</li>
      </ul>
    </td>
    </tr>
    </table>
  );
};

export default Whoweare;