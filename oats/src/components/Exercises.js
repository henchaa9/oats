import { React, useState, useEffect } from "react";
import ShowDescription from "./ShowDescription";
import AddExercise from "./AddExercise";

var allExercises = [
  {
    id: 1,
    name: "squats sdf sdf sdf sdfsdfsdf sdfsdfsdfsdfsdfsfd sdfsdfsdfsdsdf",
    description:
      "hello ol squats me boiLorem, ipsum dolor sit amet consectetur adipisicing elit. \
      apiente eos quasi aliquid delectus, a distinctio veritatis dolores consequuntur v \
      el molestiae ut aliquam neque voluptates. Rem ullam, earum beatae dolore consequuntur sunt,\
      quia molestiae temporibus possimus aspernatur, excepturi odit  hello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem, \
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem, \
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem,\
      ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quahello ol squats me boiLorem ",
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
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setDesc({
      name: allExercises[0].name,
      description: allExercises[0].description,
    });
  }, []);

  return (
    <div className="exercises">
      <div className="exercises-left">
        <button
          className="addExercise"
          onClick={() => {
            setShowAdd(!showAdd);
          }}
        >
          New
        </button>
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
        {showAdd ? (
          <AddExercise arr={allExercises} />
        ) : (
          <ShowDescription name={desc.name} description={desc.description} />
        )}
      </div>
    </div>
  );
};

export default Exercises;
