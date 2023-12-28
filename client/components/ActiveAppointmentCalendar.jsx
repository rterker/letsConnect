import React from "react";
import CalendarSwitch from "./CalendarSwitch.jsx";
import CalendarOut from "./CalendarOut.jsx";
import CalendarIn from "./CalendarIn.jsx";

const ActiveAppointmentCalendar = ({ activeAppointment, previousActiveAppointment, appointments }) => {

  //currently clicked appointment is unclicked in sidebar
  if (!activeAppointment) {
    return (
      <CalendarOut activeAppointment={previousActiveAppointment} appointments={appointments} />
    );
  }

  //no appointment is clicked and then appointment clicked in sidebar
  if (!previousActiveAppointment) {
    return (
      <CalendarIn activeAppointment={activeAppointment} appointments={appointments} />
    );
  }

  return (
    <CalendarSwitch activeAppointment={activeAppointment} previousActiveAppointment={previousActiveAppointment} />
  );


}

export default ActiveAppointmentCalendar;