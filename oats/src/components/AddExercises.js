import { React, useState, useEffect } from "react";

const AddExercises = ({todaysExercises, date}) => {        // id vajag vel
  const [exercises, setExercises] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [amount, setAmount] = useState("-");
  const [currentExercise, setCurrentExercise] = useState(
    "Click on an exercise"
  );
  const [todaysExerciseArray, setTodaysExerciseArray] = useState([])

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

  const add = async (e) => {
    e.preventDefault();

    const exercise = {
      name: currentExercise,
      amount
    };

    setTodaysExerciseArray([...todaysExerciseArray, exercise])
  }

  const save = async () => {
    const id = date.getDate().toString() + (date.getMonth()+1).toString() + date.getFullYear().toString() 
    // console.log(todaysExerciseArray);

    //delete old
    await fetch(`http://localhost:8000/dates?id=${id}`, {
      method: "DELETE"
    });
      
    const newDate = {
      id: parseInt(id),
      exercises: todaysExerciseArray
    }

    //add new
    await fetch(`http://localhost:8000/dates`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newDate),
    });
  }

  const cancel = (e) => {
    console.log("cancelled");
    e.preventDefault();
  };

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
            <form onSubmit={add}>
              <p className="amount" htmlFor="amount">
                Amount
              </p>
              <input
                type="text"
                className="amount-input"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <br />
              <button className="amount-cancel" onClick={cancel}>
                Cancel
              </button>
              <button className="amount-add" type="submit">
                Add
              </button>
              <button onClick={save}>Save</button>
            </form>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default AddExercises;
