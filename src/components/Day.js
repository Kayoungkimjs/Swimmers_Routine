import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Routine from "./Routine"

function Day() {
  const {day} = useParams();
  const {routine, setRoutine} = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/routines?day=${day}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setRoutine(data)
    })
  }, [day])
  
  return (
    <>
    <h2>Day {day}</h2>
    <table>
      <tbody>
        {routine.map(routine => (
          <Routine routine={routine} key ={routine.id} />
        ))}
      </tbody>
    </table>
    </>
  );
}  

export default Day;
