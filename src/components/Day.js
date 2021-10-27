import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Routine from "./Routine"
import styled from "styled-components";
import {API} from "../config";


function Day() {
  const {day} = useParams();
  const routines  = useFetch(`${API.ROUTINES}?day=${day}`);

  return (
    <>
    <h2>Day {day}</h2>
    {routines.length === 0 && <span>Loading...</span>}
    <Table>
      <tbody>
        {routines&&routines.map(routine => (
          <Routine routine={routine} key ={routine.id} />
        ))}
      </tbody>
    </Table>  
    </>
  );
}  

const Table = styled.div`
  border-collapse: collapse;
  width: 100%;
`;

export default Day;
