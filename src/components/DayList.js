import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

function DayList() {
  const days = useFetch("http://localhost:3001/days")

  if(days.length === 0) {
    return <span>Loading...</span>
  }

  return(
    <ListDay>
    {days && days.map(day => (
      <li key={day.id}>
        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
      </li>
    ))}
  </ListDay>
  )
}

const ListDay = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 20% 0 0;
    box-sizing: border-box;
    padding: 10px;
  }

  a {
    display: block;
    padding: 15px 15px;
    font-weight: bold;
    color: #fff;
    border: 1px solid #484848;
    background: none;
    text-align: center;
    border-radius: 10px;

    &:hover {
    border: none;
    background-color: #3DA5F5;
    }
  `;  
  
export default DayList;