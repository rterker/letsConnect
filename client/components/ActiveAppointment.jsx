import React from "react";
import Calendar from "./Calendar.jsx";

const ActiveAppointment = ({ activeAppointment, previousActiveAppointment }) => {
  //currently clicked appointment is unclicked in sidebar
  if (!activeAppointment) {
    return (
      <div className="w-160 h-160 bg-white animate-slideOut">
        <Calendar activeAppointment={previousActiveAppointment} />
      </div>
    );
  }

  //appointment clicked in sidebar
  return (
    <div className="w-160 h-160 bg-white animate-slideIn">
      <Calendar activeAppointment={activeAppointment} />
    </div>
  );
}

export default ActiveAppointment;