import { React, useState, useEffect } from "react";

const AddExercises = () => {
  const [exercises, setExercises] = useState(null);
  const [addMode, setAddMode] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(
    "Click on an exercise"
  );

  const fetchAndSet = () =>
    fetch("http://localhost:8000/exercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExercises(data);
      });

  useEffect(() => {
    fetchAndSet();
  }, []);

  if (exercises) {
    return (
      <div className="add-div">
        <div className="available-exercises">
          <ul className="smallList">
            {exercises.map((exercise) => {
              return (
                <li
                  key={exercise.id}
                  onClick={() => {
                    setCurrentExercise(exercise.name);
                    setAddMode(true);
                  }}
                >
                  {exercise.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="add-right">
          <p className="exercise-name">{currentExercise}</p>
          {addMode && (
            <>
              <p className="amount">Enter amount</p>
              <input type="text" className="amount-input" />
              <br />
              <button className="amount-cancel">Cancel</button>
              <button className="amount-add">Add</button>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default AddExercises;
