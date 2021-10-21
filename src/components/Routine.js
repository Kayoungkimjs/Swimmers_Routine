import React, {useState} from "react";

function Routine({word: w}) {
  const [routine, setRoutine] = useState(w)
  const [isToggle, setIsToggle] = useState(false);
  const [isDone, setIsDone] = useState(routine.isDone);
  
  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function handleDone() {
    fetch(`http://localhost:3004/routine/${routine.id}`, {
      method: 'PUT',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        ...Routine,
        isDone: !isDone,
      }),
  }).then(res => {
      if(res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function handleDelete() {
    if(window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3004/routine/${routine.id}`, {
      method: 'DELETE',
    }).then(res => {
      if(res.ok) {
        setRoutine({id:0});
      }
    })
  }
}

if (routine.id === 0) {
  return null;
}

  return(
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked = {isDone} onChange={handleDone}/>
      </td>
      <td>{routine.eng}</td>
      <td>{isToggle && routine.kor}</td>
      <td>
        <button onClick={handleToggle}>뜻 {isToggle ? '숨기기' : '보기'}</button>
        <button className="btn_del" onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  )
}

export default Routine;