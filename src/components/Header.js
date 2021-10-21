import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to= "/">Swimmer's Routine</Link>
      </h1>
      <div className="menu">
       <Link to= "/">Add routine</Link>
       <Link to= "/">Add Days</Link>
      </div>
    </div>
  )
}  
export default Header;
