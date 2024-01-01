import React, { useState } from "react";
import Calendar from "../components/CalendarP.jsx";
import ActiveDay from "../components/ActiveDayP.jsx";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'

//called by: BodyContainer
const CalendarContainer = ({ currentDate, setCurrentDate, appointments, setActiveDay, activeDay }) => {
  // const containerKey = activeAppointment ? activeAppointment._id : 'no-appointment';
  
  //date on calendar is clicked
  //TO DO: NEED TO CHANGE ACTIVE DAY TO ACCOUNT FOR THE ACTUAL DATE ALSO, NOT JUST HTE DAY
  if (activeDay) {
    const dailyAppointments = getAppointmentsForDay(activeDay, appointments);
    return (
      <div className="w-160 h-160 mx-auto my-auto ">
        <ActiveDay dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
      </div>
    );
  }

  return (
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setActiveDay={setActiveDay}/>
  );
}

export default CalendarContainer;