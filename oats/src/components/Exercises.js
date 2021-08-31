import { React, useState, useEffect } from "react";
import ShowDescription from "./ShowDescription";

const Exercises = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("Click on an exercise");
  const [id, setId] = useState(0);
  const [exercises, setExercises] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchAndSet = () => {
    fetch("http://localhost:8000/exercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExercises(data);
      });
  };

  useEffect(() => {
    fetchAndSet();
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

      setName("");
      setDescription("Click on an exercise");
      setId(0);
      setShowAdd(false);
    } else {
      alert("Please enter a name!");
    }
  };

  const handleCancel = () => {
    setShowAdd(false);
    setName("");
    setDescription("Click on an exercise");
    setId(0);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/exercises/${id}`, {
      method: "DELETE",
    });

    setExercises(exercises.filter((exercise) => exercise.id !== id));
    setName("");
    setDescription("Click on an exercise");
    setId(0);
  };

  const showEdit = () => {
    setEditMode(true);
    setShowAdd(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (name) {
      const exercise = {
        name,
        description,
      };

      await fetch(`http://localhost:8000/exercises/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(exercise),
      });

      fetchAndSet();
      setName(name);
      setDescription(description);
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
              setName("");
              setDescription("");
              setId(0);
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
                    setName(exercise.name);
                    setDescription(exercise.description);
                    setId(exercise.id);
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
              <form
                className="form"
                onSubmit={editMode ? handleEdit : handleAdd}
              >
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
                  <button className="addExercise-cancel" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="addExercise-submit" type="submit">
                    {editMode ? "Save" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <ShowDescription
              name={name}
              description={description}
              deleteFunc={() => handleDelete(id)}
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
