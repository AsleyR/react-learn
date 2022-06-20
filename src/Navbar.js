import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <a href="/"><h2>Task Tracker</h2></a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
