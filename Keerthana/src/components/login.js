// import logo from "./img.png"
import React from "react";
import "./style.css";
function Home() {
  return (
    <div className="image">
      <img src="./img.png" style={{ width:1700, height: 500 }} />;
      <h1 className="text">Centered</h1>
    </div>
  );
  // return(<h1>Hi</h1>);
}

export default Home;
