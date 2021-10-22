import { React, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodaysExercises from "./TodaysExercises";
import AddExercises from "./AddExercises";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState("");
  const [addExercise, setAddExercise] = useState(false);

  useEffect(() => {
    formatShowDate(date);
    // eslint-disable-next-line
  }, []);

  const clickDate = (date) => {
    setDate(date);
    formatShowDate(date);
  };

  const formatShowDate = (date) => {
    setShowDate(
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  return (
    <div className="calendar-main">
      <div className="calendar-div">
        <Calendar value={date} onChange={clickDate} />
      </div>
      <div className="day-div">
        <div className="today-exercises">
          {!addExercise && <p className="today-date">{showDate}</p>}
        </div>
        <div className="set-todays-exercises">
          {addExercise ? (
            <AddExercises date={date}/>
          ) : (
            <TodaysExercises addFunc={() => setAddExercise(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
