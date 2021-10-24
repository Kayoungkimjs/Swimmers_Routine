import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

function DayList() {
  const days = useFetch("http://localhost:3001/days")
  // const {days, setDays} = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data)
  //   })
  // }, []);

  if(days.length === 0) {
    return <span>Loading...</span>
  }

  return(
    <ListDay className="list_day">
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
    padding: 20px 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    background-color: dodgerblue;
  `;  
  
export default DayList;