import React from "react";
import CalendarDay from "./CalendarDay.jsx";
import dateUtil from "../utils/dateUtil.js";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'
import getAppointmentsForMonth from '../utils/getAppointmentsForMonth.js'

const Calendar = ({ activeAppointment, appointments, setActiveDay, animation, setAnimation }) => {
  const currentMonthAppointments = getAppointmentsForMonth(activeAppointment.date, appointments);
  const apptDate = new dateUtil(activeAppointment.date);

  const daysInMonth = dateUtil.getDaysInMonth(apptDate.yearOfAppointment, apptDate.monthOfAppointment);
  const startDay = dateUtil.getFirstDayOfMonth(apptDate.yearOfAppointment, apptDate.monthOfAppointment);
  const endDay = dateUtil.getLastDayOfMonth(apptDate.yearOfAppointment, apptDate.monthOfAppointment);

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

  const totalCells = blankStartCalendarDays.length + calendarDays.length + blankEndCalendarDays.length;
  const gridRows = Math.ceil(totalCells / 7);

  return (
    <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full border border-black`}>
      {blankStartCalendarDays}
      {calendarDays}
      {blankEndCalendarDays}
    </div>
  );
}

export default Calendar;