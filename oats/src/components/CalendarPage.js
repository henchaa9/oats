import { React, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const clickDate = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar-main">
      <Calendar value={date} onChange={clickDate} />
    </div>
  );
};

export default CalendarPage;
