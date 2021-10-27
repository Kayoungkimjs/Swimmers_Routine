import React from 'react';
import { useHistory } from 'react-router';
import {API} from "../config";
import useFetch from "../hooks/useFetch";

function CreateDay() {
  const days = useFetch(`${API.DAYS}`);
  const history = useHistory();

  function addDay() {
    fetch(`${API.DAYS}`, {
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