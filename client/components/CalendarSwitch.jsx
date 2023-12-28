import React, { useState } from "react";
import CalendarOut from "./CalendarOut.jsx";
import CalendarIn from "./CalendarIn.jsx";

const CalendarSwitch = ({ activeAppointment, previousActiveAppointment, appointments, setActiveDay }) => {
  const appointmentList = [previousActiveAppointment, activeAppointment];
  console.log('appointmentList:', appointmentList)

  return (
    appointmentList.map((appt, i) => {
      if (i === 0) return <CalendarOut activeAppointment={appt} appointments={appointments} setActiveDay={setActiveDay}/>  
      return <CalendarIn activeAppointment={appt} appointments={appointments} setActiveDay={setActiveDay}/>
    })
  );
}

export default CalendarSwitch;
