import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>
        <a href = "/">Swimmer's Routine</a>
      </h1>
      <div className="menu">
        <a href = "x" className="link">
         Add routine
        </a>
        <a href = "x" className="link">
         Add Days
        </a>
      </div>
    </div>
  )
}  
export default Header;
