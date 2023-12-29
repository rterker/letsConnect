import React, { useState } from "react";
import Calendar from "../components/Calendar.jsx";
import ActiveDay from "../components/ActiveDay.jsx";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'

const CalendarContainer = ({ activeAppointment, previousActiveAppointment, appointments, setActiveDay, activeDay }) => {
  const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked
  if (activeDay) {
    const dailyAppointments = getAppointmentsForDay(activeDay, appointments);
    return (
      <div key={containerKey} className="w-160 h-160 bg-[#fafafa]">
        <ActiveDay dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
      </div>
    );
  }

  //currently clicked appointment is unclicked in sidebar
  if (!activeAppointment) {
    return (
      <div key={containerKey} className="w-160 h-160 bg-[#e7e6e1] animate-slideOut">
        <Calendar activeAppointment={previousActiveAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
      </div>
    );
  }

  return (
    <div key={containerKey} className="w-160 h-160 bg-[#e7e6e1] animate-slideIn">
      <Calendar activeAppointment={activeAppointment} appointments={appointments} setActiveDay={setActiveDay}/>
    </div>    
  );
}

export default CalendarContainer;