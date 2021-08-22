import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="homeBtn" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="calendarBtn" to="/calendar">
            Calendar
          </Link>
        </li>
        <li>
          <Link className="exerciseBtn" to="/exercises">
            Exercises
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
