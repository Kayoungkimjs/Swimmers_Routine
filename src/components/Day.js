import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Word from "./Word"

function Day() {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  // const {routine, setRoutine} = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/routine?day=${day}`)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setRoutine(data)
  //   })
  // }, [day])
  
  return (
    <>
    <h2>Day {day}</h2>
    {words.length === 0 && <span>Loading...</span>}
    <DayTable>
      <tbody>
        {words&&words.map(word => (
          <Word word={word} key ={word.id} />
        ))}
      </tbody>
    </DayTable>
    </>
  );
}  

const DayTable = styled.div`
  border-collapse: collapse;
  width: 100%;

  td {
    width: 25%;
    height: 70px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;
  }

  td:first-child {
    width: 10%;
  }

  .off td {
    background: #eee;
    color: #ccc;
  }
`;

export default Day;
