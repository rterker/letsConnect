import React, { useState } from "react";
import Calendar from "../components/Calendar.jsx";
import ActiveDay from "../components/ActiveDayP.jsx";
import getConfirmedAppointmentsForDay from '../utils/getConfirmedAppointmentsForDay.js';
import getPendingAppointmentsForDay from '../utils/getPendingAppointmentsForDay.js';

//called by: BodyContainer
const CalendarContainer = ({ user, currentDate, setCurrentDate, appointments, setAppointments, showAppointments, setShowAppointments, clickedAppointment, setClickedAppointment }) => {
  const [activeDay, setActiveDay] = useState(null); 

  // const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked OR sidebar appointment is clicked
  if (showAppointments) {
    let confirmedAppointments;
    let pendingAppointments;

    if (activeDay) {
      const { userName } = user;
      confirmedAppointments = getConfirmedAppointmentsForDay(activeDay, appointments);
      pendingAppointments = getPendingAppointmentsForDay(userName, activeDay, appointments);
    }
    return (
        <ActiveDay user={user} confirmedAppointments={confirmedAppointments} pendingAppointments={pendingAppointments} setAppointments={setAppointments} setActiveDay={setActiveDay} setShowAppointments={setShowAppointments} clickedAppointment={clickedAppointment} setClickedAppointment={setClickedAppointment}/>
    );
  }

  return (
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setActiveDay={setActiveDay} setShowAppointments={setShowAppointments}/>
  );
}

export default CalendarContainer;