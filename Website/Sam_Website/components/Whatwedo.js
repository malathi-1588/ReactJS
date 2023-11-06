import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Whatwedo = () => {
  return (
    <table className="nav-list">
    <tr>
    <td className="dropdown">
                <ul className="dropdown-menu">
                  <li>Lower Emission Transportation</li>
                  <li>Materials for modern living</li>
                  <li>Delivering industrial solutions</li>
                  <li>Energy supply</li>
                </ul>
          </td>
          </tr>
      </table>
  );
};

export default Whatwedo;