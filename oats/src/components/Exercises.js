import { React, useState, useEffect } from "react";
import ShowDescription from "./ShowDescription";

const Exercises = () => {
  const [exerciseData, setExerciseData] = useState({
    id: 0,
    name: "",
    description: "Click on an exercise",
  });
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/exercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExercises(data);
      });
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (name) {
      const exercise = {
        name,
        description,
      };

      const res = await fetch("http://localhost:8000/exercises", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(exercise),
      });

      const data = await res.json();

      setExercises([...exercises, data]);

      setExerciseData({ name: "", description: "Click on an exercise", id: 0 });
      setName("");
      setDescription("");
      setShowAdd(false);
    } else {
      alert("Please enter a name!");
    }
  };

  const handleCancel = () => {
    setShowAdd(false);
    setName("");
    setDescription("");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/exercises/${id}`, {
      method: "DELETE",
    });

    setExercises(exercises.filter((exercise) => exercise.id !== id));
    setExerciseData({ name: "", description: "Click on an exercise", id: 0 });
  };

  const showEdit = () => {
    setEditMode(true);
    setShowAdd(true);
    setName(exerciseData.name);
    setDescription(exerciseData.description);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (name) {
      const exercise = {
        name,
        description,
      };
      console.log(exerciseData.id);

      fetch(`http://localhost:8000/exercises/${exerciseData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(exercise),
      });
      // kkas ar id nav, citreiz 404 izmet, ari setExercises jaizdoma

      setExerciseData({ name, description });

      setName("");
      setDescription("");
      setShowAdd(false);
    } else {
      alert("Please enter a name!");
    }
  };

  if (exercises) {
    return (
      <div className="exercises">
        <div className="exercises-left">
          <button
            className="addExercise-btn"
            onClick={() => {
              setShowAdd(true);
              setEditMode(false);
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
                    setExerciseData({
                      name: exercise.name,
                      description: exercise.description,
                      id: exercise.id,
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
              {editMode ? (
                <form className="form" onSubmit={handleEdit}>
                  <p htmlFor="form-name" className="exercises-addName">
                    Name
                  </p>
                  <input
                    className="exercises-addName-input"
                    type="text"
                    name="form-name"
                    id="form-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <p htmlFor="form-desc" className="exercises-addDesc">
                    Description
                  </p>
                  <textarea
                    className="exercises-addDesc-textarea"
                    name="form-desc"
                    id="form-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div>
                    <button
                      className="addExercise-cancel"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button className="addExercise-submit" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <form className="form" onSubmit={handleAdd}>
                  <p htmlFor="form-name" className="exercises-addName">
                    Name
                  </p>
                  <input
                    className="exercises-addName-input"
                    type="text"
                    name="form-name"
                    id="form-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <p htmlFor="form-desc" className="exercises-addDesc">
                    Description
                  </p>
                  <textarea
                    className="exercises-addDesc-textarea"
                    name="form-desc"
                    id="form-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div>
                    <button
                      className="addExercise-cancel"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button className="addExercise-submit" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <ShowDescription
              name={exerciseData.name}
              description={exerciseData.description}
              deleteFunc={() => handleDelete(exerciseData.id)}
              editFunc={showEdit}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default Exercises;
