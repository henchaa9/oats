import React from "react";
import ExerciseCard from "./ExerciseCard";

const Date = ({ date }) => {
  return (
    <div className="date-container">
      <h1 className="current-date">{date ? date : "30.02"}</h1>
      <div className="date-exercises">
        <ExerciseCard text="squats" amount="4x12" />
        <ExerciseCard text="deadlift" amount="2" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="max" />
        <ExerciseCard text="cardio" amount="1h 30min" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
        <ExerciseCard text="deadlift" amount="3x12" />
      </div>
    </div>
  );
};

export default Date;
