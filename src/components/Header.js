import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to= "/">Swimmer's Routine</Link>
      </h1>
      <div className="menu">
       <button type="button">Add Routine</button>
       <button type="button">Add Days</button>
      </div>
    </div>
  )
}  
export default Header;
