import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <p>Global Weather</p>
      </div>
      <div className="header__navBar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
