import React, { useState } from "react";
import Calendar from "../components/Calendar.jsx";
import ActiveAppointmentDetails from "../components/ActiveAppointmentDetails.jsx";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'

const CalendarContainer = ({ activeAppointment, previousActiveAppointment, appointments, setActiveDay, activeDay }) => {
  const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked
  if (activeDay) {
    const dailyAppointments = getAppointmentsForDay(activeDay, appointments);
    return (
      <ActiveAppointmentDetails dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
    );
  }

  //currently clicked appointment is unclicked in sidebar
  if (!activeAppointment) {
    return (
      <div key={containerKey} className="w-160 h-160 bg-[#fafafa] animate-slideOut">
        <Calendar activeAppointment={previousActiveAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
      </div>
    );
  }

  return (
    <div key={containerKey} className="w-160 h-160 bg-[#fafafa] animate-slideIn">
      <Calendar activeAppointment={activeAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
    </div>    
  );
}

export default CalendarContainer;