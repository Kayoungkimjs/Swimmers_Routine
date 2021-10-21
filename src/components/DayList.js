import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

function DayList() {
  return(
    <ul className="list_day">
      {data.days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>
      ))}
    </ul>
  )
}

export default DayList;