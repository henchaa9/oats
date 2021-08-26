import { React, useState, useEffect } from "react";
import ShowDescription from "./ShowDescription";

var allExercises = [
  {
    id: 1,
    name: "squats",
    description:
      "hello ol squats me boiLorem, ipsum dolor sit amet consectetur adipisicing elit.",
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
];

const Exercises = () => {
  const [desc, setDesc] = useState({ name: "hello", description: "world" });
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState(allExercises);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const exercise = {
        name,
        description,
      };
      setExercises((exercises) => {
        return [...exercises, exercise];
      });
      setName("");
      setDescription("");
    } else {
      alert("Please add a name!");
    }

    console.log(exercises);
  };

  const handleCancel = () => {
    setShowAdd(!showAdd);
    setName("");
    setDescription("");
  };

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
          className="addExercise-btn"
          onClick={() => {
            setShowAdd(!showAdd);
          }}
        >
          New
        </button>
        <ul className="exerciseList">
          {exercises.map((exercise) => {
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
          <div className="add-exercise">
            <form className="form" onSubmit={handleSubmit}>
              <p htmlFor="form-name">Name</p>
              <input
                type="text"
                name="form-name"
                id="form-name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p htmlFor="form-desc">Description</p>
              <textarea
                name="form-desc"
                id="form-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        ) : (
          <ShowDescription name={desc.name} description={desc.description} />
        )}
      </div>
    </div>
  );
};

export default Exercises;
