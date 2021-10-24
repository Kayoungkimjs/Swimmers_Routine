import React, {useState} from "react";

function Word({word:w}) {
  const [word, setWord] = useState(w)
  const [isToggle, setIsToggle] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  
  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function handleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
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
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
}

if (word.id === 0) {
  return null;
}

  return(
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked = {isDone} onChange={handleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isToggle && word.kor}</td>
      <td>
        <button onClick={handleToggle}>뜻 {isToggle ? '숨기기' : '보기'}</button>
        <button className="btn_del" onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  )
}

export default Word;