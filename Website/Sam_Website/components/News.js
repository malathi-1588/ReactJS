import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const News = () => {
  return (
    <table className="nav-list">
    <tr>
    <td className="dropdown">
              <ul className="dropdown-menu">
                <li>Reporting and publications</li>
                <li>Viewpoints</li>
              </ul>
          </td>
          </tr>
      </table>
  );
};

export default News;