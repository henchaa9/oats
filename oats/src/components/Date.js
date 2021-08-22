import React from "react";
import ExerciseCard from "./ExerciseCard";

const Date = () => {
  return (
    <div className="date-container">
      <h1 className="current-date">26.02</h1>
      <div className="date-exercises">
        <ExerciseCard text="squats" amount="4x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
      </div>
    </div>
  );
};

export default Date;
