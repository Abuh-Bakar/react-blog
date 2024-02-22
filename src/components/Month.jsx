import "./month.css";

import React from "react";

import { useState } from "react";
import Calendar from "react-calendar";
import "./month.css";

const Month = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default Month;
