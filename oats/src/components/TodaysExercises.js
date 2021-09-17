import React from "react";
import ExerciseCard from "./ExerciseCard";

const TodaysExercises = ({ addFunc }) => {
  return (
    <div>
      <button onClick={addFunc} className="calendar-add-btn">
        Add
      </button>
      <div className="todays-exercises-container">
        <ExerciseCard text="hello" amount="3x123" />
        <ExerciseCard text="hello" amount="3x123" />
        <ExerciseCard text="hello" amount="3x123" />
      </div>
    </div>
  );
};

export default TodaysExercises;
