import React from "react";
import CalendarDay from "./CalendarDay.jsx";
import dateUtil from "../utils/dateUtil.js";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'
import getAppointmentsForMonth from '../utils/getAppointmentsForMonth.js'

const CalendarStart = ({ currentDate, appointments, setActiveDay }) => {
  const currentMonthAppointments = getAppointmentsForMonth(currentDate, appointments);
  const currentDateObj = new dateUtil(currentDate);

  const daysInMonth = dateUtil.getDaysInMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);
  const startDay = dateUtil.getFirstDayOfMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);
  const endDay = dateUtil.getLastDayOfMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);

  //add a unique key prop to each CalendarDay for react optimization
  const blankStartCalendarDays = [];
  for (let i = 0; i < startDay; i++) {
    blankStartCalendarDays.push(<CalendarDay />);  
  }
  //add a unique key prop to each CalendarDay for react optimization
  const calendarDays = [];
  for (let i = 1; i < daysInMonth + 1; i++) {
    const appointmentsForDay = getAppointmentsForDay(i, currentMonthAppointments);
    calendarDays.push(<CalendarDay dateOfMonth={i} appointmentsForDay={appointmentsForDay} setActiveDay={setActiveDay}/>);
  }
  //add a unique key prop to each CalendarDay for react optimization
  const blankEndCalendarDays = [];
  for (let i = endDay + 1; i < 7; i++) {
    blankEndCalendarDays.push(<CalendarDay />);  
  }

  return (
    <div className="w-160 h-160 bg-white animate-slideIn">
      <div className="grid grid-rows-6 grid-cols-7 w-full h-full border border-black">
        {blankStartCalendarDays}
        {calendarDays}
        {blankEndCalendarDays}
      </div>
    </div>
  );
}

export default CalendarStart;