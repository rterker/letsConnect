import React, { useState } from "react";
import CalendarSwitch from "./CalendarSwitch.jsx";
import CalendarOut from "./CalendarOut.jsx";
import CalendarIn from "./CalendarIn.jsx";
import ActiveAppointmentDetails from "./ActiveAppointmentDetails.jsx";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'

const ActiveAppointmentCalendar = ({ activeAppointment, previousActiveAppointment, appointments, setActiveDay, activeDay }) => {
  if (activeDay) {
    const dailyAppointments = getAppointmentsForDay(activeDay, appointments);
    return (
      <ActiveAppointmentDetails dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
    );
  }

  //currently clicked appointment is unclicked in sidebar
  if (!activeAppointment) {
    return (
      <CalendarOut activeAppointment={previousActiveAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
    );
  }

  //no appointment is clicked and then appointment clicked in sidebar
  if (!previousActiveAppointment) {
    return (
      <CalendarIn activeAppointment={activeAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
    );
  }

  //TO DO: FIX animation here
  return (
    <CalendarSwitch activeAppointment={activeAppointment} previousActiveAppointment={previousActiveAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
  );


}

export default ActiveAppointmentCalendar;