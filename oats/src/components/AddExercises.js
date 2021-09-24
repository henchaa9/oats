import { React, useState, useEffect } from "react";

const AddExercises = () => {
  const [exercises, setExercises] = useState(null);

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
      <div>
        <div className="available-exercises">
          <ul className="smallList">
            {exercises.map((exercise) => {
              return (
                <li
                  key={exercise.id}
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  {exercise.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default AddExercises;
