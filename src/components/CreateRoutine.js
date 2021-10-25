import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

function CreateRoutine() {
  const days = useFetch("http://localhost:3000/days");
  const strokes = useFetch("http://localhost:3000/strokes")
  const distances =useFetch("http://localhost:3000/distances")
  const laps =useFetch("http://localhost:3000/laps")
  
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && dayRef.current && strokeRef.current && distanceRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const stroke = strokeRef.current.value;
      const distance = distanceRef.current.value;
      const lap = lapRef.current.value;

      fetch("http://localhost:3000/routines/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          stroke,
          distance,
          lap,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          history.push(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const strokeRef = useRef<HTMLSelectElement>(null);
  const distanceRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const lapRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <RoutineInput>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </RoutineInput>
      <RoutineInput>
        <label>Stroke</label>
        <select ref={strokeRef}>
          {strokes.map(stroke => (
            <option key={stroke.id} value={stroke.stroke}>
              {stroke.stroke}
            </option>
          ))}
        </select>
      </RoutineInput>
      <RoutineInput>
        <label>Distance(m)</label>
        <select ref={distanceRef}>
          {distances.map(distance => (
            <option key={distance.id} value={distance.distance}>
              {distance.distance}
            </option>
          ))}
        </select>
      </RoutineInput>
      <RoutineInput>
        <label>Laps</label>
        <select ref={lapRef}>
          {laps.map(lap => (
            <option key={lap.id} value={lap.lap}>
              {lap.lap}
            </option>
          ))}
        </select>
      </RoutineInput>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}

const RoutineInput = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 400px;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
  }

  select {
    width: 400px;
    height: 40px;
    font-size: 20px;
  }
`;

export default CreateRoutine;