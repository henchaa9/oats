import { React, useState, useEffect } from "react";

var allExercises = [
  {
    id: 1,
    name: "squats",
    description: "le good ol squats me boi",
  },
  {
    id: 2,
    name: "deadlift",
    description: "le good ol deadlift me boi",
  },
  {
    id: 3,
    name: "shoulder press",
    description: "le good ol shoulder press me boi",
  },
  {
    id: 4,
    name: "bench press",
    description: "le good ol bench press me boi",
  },
  {
    id: 5,
    name: "leg extensions",
    description: "le good ol leg extensions me boi",
  },
  {
    id: 6,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
  {
    id: 7,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
  {
    id: 8,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
  {
    id: 9,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
  {
    id: 10,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
  {
    id: 11,
    name: "calf raises",
    description: "le good ol calf raises me boi",
  },
];

const Exercises = () => {
  const [desc, setDesc] = useState({ name: "hello", description: "world" });

  useEffect(() => {
    setDesc({
      name: allExercises[0].name,
      description: allExercises[0].description,
    });
  }, []);

  return (
    <div className="exercises">
      <div className="exercises-left">
        <button className="addExercise">New</button>
        <ul className="exerciseList">
          {allExercises.map((exercise) => {
            return (
              <li
                key={exercise.id}
                onClick={() => {
                  setDesc({
                    name: exercise.name,
                    description: exercise.description,
                  });
                }}
              >
                {exercise.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="exercises-right">
        <h4>{desc.name}</h4>
        <p>{desc.description}</p>
      </div>
    </div>
  );
};

export default Exercises;
