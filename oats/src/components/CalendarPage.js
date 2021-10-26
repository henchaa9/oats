import { React, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodaysExercises from "./TodaysExercises";
import AddExercises from "./AddExercises";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState("");
  const [addExercise, setAddExercise] = useState(false);
  const [todaysExercises, setTodaysExercises] = useState([])
  // const [ID, setID] = useState(date)

  // var ID = 

  // const changeDate = (date) => {
  //   const ID = date.getDate().toString() + (date.getMonth()+1).toString() + date.getFullYear().toString();
  //   fetchTodaysExercises(ID)
  // }

  const fetchTodaysExercises = async (id) => {
    try {
      console.log(id);
      await fetch(`http://localhost:8000/dates?id=${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTodaysExercises(data[0].exercisess)
          console.log(todaysExercises);
        })
    }
    catch (TypeError) {
      console.log("nebus vecit");
    }
  }


  useEffect(() => {                 
    // fetchTodaysExercises(ID);
    formatShowDate(date);
    // eslint-disable-next-line
  }, []);

  // const changeDate = (date) => {
  // }

  const clickDate = (date) => {
    formatShowDate(date);
    setDate(date);
    const id = date.getDate().toString() + (date.getMonth()+1).toString() + date.getFullYear().toString() 
    fetchTodaysExercises(id)
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
      </div>
      <div className="day-div">
        <div className="today-exercises">
          {!addExercise && <p className="today-date">{showDate}</p>}
        </div>
        <div className="set-todays-exercises">
          {addExercise ? (
            <AddExercises  todaysExercises={todaysExercises}/> // id jaieliek pie props
          ) : (
            <TodaysExercises addFunc={() => setAddExercise(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
