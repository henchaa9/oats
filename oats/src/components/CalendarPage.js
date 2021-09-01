import { React, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState("");

  const clickDate = (date) => {
    setDate(date);

    if (new Date().getFullYear() < date.getFullYear()) {
      setShowDate(
        date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
      );
    } else {
      setShowDate(date.getDate() + "." + date.getMonth());
    }
  };

  return (
    <div className="calendar-main">
      <div className="calendar-div">
        <Calendar value={date} onChange={clickDate} />
      </div>
      <div className="day-div">
        <h1>{showDate}</h1>
      </div>
    </div>
  );
};

export default CalendarPage;
