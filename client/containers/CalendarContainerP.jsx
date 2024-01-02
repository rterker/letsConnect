import React, { useState } from "react";
import Calendar from "../components/CalendarP.jsx";
import ActiveDay from "../components/ActiveDayP.jsx";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'

//called by: BodyContainer
const CalendarContainer = ({ currentDate, setCurrentDate, appointments, setActiveDay, activeDay }) => {
  // const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked
  if (activeDay?.day) {
    const dailyAppointments = getAppointmentsForDay(activeDay, appointments);
    return (
        <ActiveDay dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
    );
  }

  return (
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setActiveDay={setActiveDay}/>
  );
}

export default CalendarContainer;