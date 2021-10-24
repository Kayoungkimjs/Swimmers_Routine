import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderGroup>
      <h1>
        <Link to= "/">Swimmer's Routine</Link>
      </h1>
      <HeaderGroup className="menu">
       <Link to="/create_routine" className="link">Add Routine</Link>
       <Link to="/create_day" className="link">Add Day</Link>
      </HeaderGroup>
    </HeaderGroup>
  )
}  

const HeaderGroup = styled.div`
  positon: relative;
  padding: 20px;

  .menu {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .link {
    border: none;
    padding: 10px;
    margin-left: 10px;
    background-color: #efefef;
    font-weight: bold;
    border-radius: 8px;
  }
`;

export default Header;
