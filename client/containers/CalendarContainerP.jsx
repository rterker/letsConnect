import React, { useState } from "react";
import Calendar from "../components/Calendar.jsx";
import ActiveDay from "../components/ActiveDayP.jsx";
import getConfirmedAppointmentsForDay from '../utils/getConfirmedAppointmentsForDay.js';
import getPendingAppointmentsForDay from '../utils/getPendingAppointmentsForDay.js';

//called by: BodyContainer
const CalendarContainer = ({ user, currentDate, setCurrentDate, appointments, setAppointments, setActiveDay, activeDay }) => {
  console.log('activeDay in CalendarContainer:', activeDay)

  // const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked
  //TO DO: we want all appointments for that day not confirmed only
  if (activeDay?.day) {
    const { _id: userId } = user;
    const confirmedAppointments = getConfirmedAppointmentsForDay(activeDay, appointments);
    const pendingAppointments = getPendingAppointmentsForDay(userId, activeDay, appointments);
    return (
        <ActiveDay confirmedAppointments={confirmedAppointments} pendingAppointments={pendingAppointments} setAppointments={setAppointments} setActiveDay={setActiveDay}/>
    );
  }

  return (
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setActiveDay={setActiveDay}/>
  );
}

export default CalendarContainer;