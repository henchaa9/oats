import React from "react";
import ExerciseCard from "./ExerciseCard";

const TodaysExercises = ({ addFunc, todaysexercises}) => {
  return (
    <div>
      <button onClick={addFunc} className="calendar-add-btn">
        Add
      </button>
      <div className="todays-exercises-container">
        {todaysexercises && todaysexercises.map((exercise) => {
          return <ExerciseCard key={exercise.id} text={exercise.name} amount={exercise.amount} />
        })}
      </div>
    </div>
  );
};

export default TodaysExercises;
