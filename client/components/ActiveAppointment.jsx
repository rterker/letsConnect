import React from "react";
import Calendar from "./Calendar.jsx";

const ActiveAppointment = ({ activeAppointment }) => {

  return (
    <div className="w-160 h-160 bg-green-300 animate-slideIn">
      <Calendar activeAppointment={activeAppointment} />
    </div>
  );
}

export default ActiveAppointment;