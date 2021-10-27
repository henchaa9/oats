import React from "react";
import ExerciseCard from "./ExerciseCard";

const TodaysExercises = ({ addFunc, exercises}) => {
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
      <div>
        <ul>
          {exercises.map((exercise) => {
            return (
              <li>{exercise.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodaysExercises;
