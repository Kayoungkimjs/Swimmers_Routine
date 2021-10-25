import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";


function Header() {
  function useHover() {
    const [hovering, setHovering] = useState(false);
    const onHoverProps = {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
  } 
  const [aIsHovering, aHoverProps] = useHover();

  return (
    <HeaderGroup>
      <h1>
        <Link to= "/" {...aHoverProps} className="logo">{aIsHovering ? "Stay Calm, Keep Swimming": "Swimmer's Routine"}</Link>
      </h1>
      <HeaderGroup className="menu">
       <Link to="/create_routine" className="link">Add Routine</Link>
       <Link to="/create_day" className="link">Add Day</Link>
      </HeaderGroup>
    </HeaderGroup>
  )
}  

const transition = keyframes`
 from {
   opacity: 0
 }
 to {
   opacity: 1
 }
 `;

const HeaderGroup = styled.div`
  positon: relative;
  padding: 20px;

  .logo {
    animation-name: ${transition};
    animation-duration: 800ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  .menu {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .link {
    border: none;
    padding: 10px;
    margin-left: 10px;
    background-color: #ECF6FE;
    font-weight: bold;
    border-radius: 8px;
  
    &:hover {
      background: none;
      border: 1px solid #3F4150;
    }
`;



export default Header;
