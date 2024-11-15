import React from "react";
import CalendarDay from "./CalendarDay.jsx";
import dateUtil from "../utils/dateUtil.js";
import getConfirmedAppointmentsForDay from '../utils/getConfirmedAppointmentsForDay.js'
import getConfirmedAppointmentsForMonth from '../utils/getConfirmedAppointmentsForMonth.js'

//called by: CalendarContainer
const Calendar = ({ currentDate, setCurrentDate, appointments, setActiveDay, setShowAppointments }) => {
  //currentDate is a string
  //getConfirmedAppointmentsForMonth only cares about year and month, not day
  const currentMonthAppointments = getConfirmedAppointmentsForMonth(currentDate, appointments);
  const currentDateObj = new dateUtil(currentDate);

  const daysInMonth = dateUtil.getDaysInMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);
  const startDay = dateUtil.getFirstDayOfMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);
  const endDay = dateUtil.getLastDayOfMonth(currentDateObj.yearOfAppointment, currentDateObj.monthOfAppointment);

  //TO DO: add a unique key prop to each CalendarDay for react optimization
  const blankStartCalendarDays = [];
  for (let i = 0; i < startDay; i++) {
    blankStartCalendarDays.push(<CalendarDay />);  
  }
  //TO DO: add a unique key prop to each CalendarDay for react optimization
  const calendarDays = [];
  for (let i = 1; i < daysInMonth + 1; i++) {
    const dateObj = {
      day: i,
      month: currentDateObj.monthOfAppointment,
      year: currentDateObj.yearOfAppointment
    };
    const appointmentsForDay = getConfirmedAppointmentsForDay(dateObj, currentMonthAppointments);
    calendarDays.push(<CalendarDay day={i} year={currentDateObj.yearOfAppointment} month={currentDateObj.monthOfAppointment} appointmentsForDay={appointmentsForDay} setActiveDay={setActiveDay} setShowAppointments={setShowAppointments} />);
  }
  //TO DO: add a unique key prop to each CalendarDay for react optimization
  const blankEndCalendarDays = [];
  for (let i = endDay + 1; i < 7; i++) {
    blankEndCalendarDays.push(<CalendarDay />);  
  }

  const totalCells = blankStartCalendarDays.length + calendarDays.length + blankEndCalendarDays.length;
  const gridRows = Math.ceil(totalCells / 7);

  function handleLeftClick() {
    const date = new Date(currentDate);
    const newMonth = date.getMonth() - 1;
    date.setMonth(newMonth, 1);
    setCurrentDate(date.toString());
  }
  function handleRightClick() {
    const date = new Date(currentDate);
    const newMonth = date.getMonth() + 1;
    date.setMonth(newMonth, 28);
    setCurrentDate(date.toString());
  }

  return (
    <div className="flex flex-col mx-auto my-auto w-160 h-160 bg-[#fafafa] border-t border-r border-black animate-slideIn">
      <div className="flex justify-between pt-3 pb-3 border-b border-black border-l bg-[#fafafa] ">
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none ml-2 cursor-pointer" onClick={handleLeftClick}>{'<'}</button>
        <b id="calendarHeader" className="text-2xl">{currentDateObj.monthOfAppointment + 1} / {currentDateObj.yearOfAppointment}</b>
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none mr-2 cursor-pointer" onClick={handleRightClick}>{'>'}</button>
      </div>
      <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full `}>
        {blankStartCalendarDays}
        {calendarDays}
        {blankEndCalendarDays}
      </div>
    </div>
  );
}

export default Calendar;