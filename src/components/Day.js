import React from "react";
import { useParams } from "react-router-dom";
import Routine from "./Routine"
import data from "../data/data.json";

function Day() {
  const {day} = useParams();
  const routineList = data.routines.filter(routine => routine.day === Number(day));
  
  return (
    <>
    <h2>Day {day}</h2>
    <table>
      <tbody>
        {routineList.map(routine => (
          <Routine routine={routine} key ={routine.id} />
        ))}
      </tbody>
    </table>
    </>
  );
}  

export default Day;
