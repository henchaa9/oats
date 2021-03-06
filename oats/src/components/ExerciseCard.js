import { React } from "react";

const ExerciseCard = ({ text, amount }) => {
  return (
    <div className="exercise-card">
      <div className="card-text">
        <p>{text ? text : "exercise"}</p>
      </div>
      <div className="card-amount">
        <p>{amount ? amount : "-"}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
