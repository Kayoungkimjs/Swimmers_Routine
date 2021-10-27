import React, {useState} from "react";
import styled from "styled-components";
import {API} from "../config";

function Routine({routine: r}) {
  const [routine, setRoutine] = useState(r)
  const [isToggle, setIsToggle] = useState(false);
  const [isDone, setIsDone] = useState(routine.isDone);
  
  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function handleDone() {
    fetch(`${API.ROUTINES}/${routine.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...routine,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function handleDelete() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`${API.ROUTINES}/${routine.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setRoutine({
            ...routine,
            id: 0,
          });
        }
      });
    }
}

if (routine.id === 0) {
  return null;
}

  return(
    <tr className={isDone ? "off" : ""}>
      <TableData>
        <input type="checkbox" checked = {isDone} onChange={handleDone}/>
      </TableData>
      <TableData>{routine.stroke}</TableData>
      <TableData>{routine.distance}m x {routine.lap}회</TableData>
      <TableData>{isToggle && `총 ${routine.distance * routine.lap}m`} </TableData>
      <TableData>
        <button onClick={handleToggle}>거리 {isToggle ? '숨기기' : '보기'}</button>
        <button className="btn_del" onClick={handleDelete}>삭제</button>
      </TableData>
    </tr>
  )
}

const TableData = styled.td`
  width: 15%;
  height: 60px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 22px;
  
  &:first-child {
    width: 10%;
  } 

  &:last-child {
    width: 20%;
  }

  .btn_del {
    margin-left: 10px;
    color: #fff;
    background-color: #F86D7D;
  }
`;


export default Routine;