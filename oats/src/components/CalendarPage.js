import { React, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState("");

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
          <p className="today-date">{showDate}</p>
        </div>
        <div className="set-exercises">
          <p>nothing</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
