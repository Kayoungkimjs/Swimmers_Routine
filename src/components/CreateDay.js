import React from 'react';
import { useHistory } from 'react-router';
import useFetch from "../hooks/useFetch";

function CreateDay() {
  const days = useFetch("http://localhost:3000/days");
  const history = useHistory();

  function addDay() {
    fetch("http://localhost:3000/days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
        history.push(`/`);
      }
    });
  }
  return(
    <div>
      <h3>{days.length} swimming day is recording..</h3>
      <button onClick={addDay}>+ Day</button>
    </div>
  );
}

export default CreateDay;