import React, {useState} from "react";

function Routine({routine}) {
  const [isToggle, setIsToggle] = useState(false);
  const [isDone, setIsDone] = useState(routine.isDone);
  
  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function handleDone() {
    setIsDone(!isDone);
  }

  return(
  <tr className={isDone ? "off" : ""}>
  <td>
    <input type="checkbox" checked = {routine.isDone} onChange={handleDone}/>
  </td>
  <td>{routine.eng}</td>
  <td>{isToggle && routine.kor}</td>
  <td>
    <button onClick={handleToggle}>뜻 {isToggle ? '숨기기' : '보기'}</button>
    <button className="btn_del">삭제</button>
  </td>
</tr>
  )
}

export default Routine;