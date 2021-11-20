import { React, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodaysExercises from "./TodaysExercises";
import AddExercises from "./AddExercises";
import ExerciseCard from "./ExerciseCard";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState("");
  const [addExercise, setAddExercise] = useState(false);
  const [todaysExercises, setTodaysExercises] = useState([]);
  const [saved, setSaved] = useState(true);
  const [addedNow, setAddedNow] = useState([]);

  const fetchTodaysExercises = async (id) => {
    try {
      // console.log(id);
      await fetch(`http://localhost:8000/dates?id=${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data[0].exercises.length > 0) {
            setTodaysExercises(data[0].exercises);
          } else {
            setTodaysExercises([]);
          }
        });
    } catch (TypeError) {
      console.log("making new date");
      setTodaysExercises([]);

      const newdate = {
        id: parseInt(id),
        exercises: [],
      };

      await fetch(`http://localhost:8000/dates`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newdate),
      });
    }
  };

  useEffect(() => {
    const id =
      date.getDate().toString() +
      (date.getMonth() + 1).toString() +
      date.getFullYear().toString();
    fetchTodaysExercises(id);
    formatShowDate(date);
    // eslint-disable-next-line
  }, []);

  const clickDate = (date) => {
    formatShowDate(date);
    setDate(date);
    const id =
      date.getDate().toString() +
      (date.getMonth() + 1).toString() +
      date.getFullYear().toString();
    fetchTodaysExercises(id);
  };

  const formatShowDate = (date) => {
    setShowDate(
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  return (
    <div className="calendar-main">
      <div className="calendar-div">
        <Calendar value={date} onClickDay={clickDate} />
        {addExercise && (
          <div>
            <p className="todays-added-exercises">
              Added now{" "}
              {!saved && <span className="saved-span">(UNSAVED)</span>}
            </p>
            <div className="added-now-conainer">
              {addedNow &&
                addedNow.map((exercise) => {
                  return (
                    <ExerciseCard
                      name={exercise.name}
                      amount={exercise.amount}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <div className="day-div">
        <div className="today-exercises">
          {!addExercise && <p className="today-date">{showDate}</p>}
        </div>
        <div className="set-todays-exercises">
          {addExercise ? (
            <AddExercises
              todaysExercises={todaysExercises}
              date={date}
              cancelAdding={() => {
                setAddExercise(false);
                window.location.reload(false);
              }}
              saveAll={() => {
                setAddExercise(false);
                window.location.reload(false);
                setSaved(true);
              }}
              notSaved={() => {
                setSaved(false);
              }}
              addedToday={(newExercise) => {
                setAddedNow(...addedNow, newExercise);
              }}
            /> // id jaieliek pie props
          ) : (
            <TodaysExercises
              addFunc={() => setAddExercise(true)}
              todaysexercises={todaysExercises}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
