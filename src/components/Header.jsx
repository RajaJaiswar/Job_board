import React from "react";
import "../App.css";  


function Header() {
  return (
    <header className="header">
      <p className="header-title">Jobify.</p>
      <h1 className="header-center">Find Jobs. Get Hired. Succeed.</h1>
      
      <div className="header-buttons">
        <button className="header-button">About Us</button>
        <button className="header-button">Login</button>
      </div>
    </header>
    
  );
}

export default Header;