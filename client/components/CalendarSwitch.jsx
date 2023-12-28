import React, { useState } from "react";
import CalendarOut from "./CalendarOut.jsx";
import CalendarIn from "./CalendarIn.jsx";

const CalendarSwitch = ({ activeAppointment, previousActiveAppointment }) => {
  const appointments = [previousActiveAppointment, activeAppointment];

  return (
    appointments.map((appt, i) => {
      if (i === 0) return <CalendarOut activeAppointment={appt}/>  
      return <CalendarIn activeAppointment={appt}/>
    })
  );
}

export default CalendarSwitch;
