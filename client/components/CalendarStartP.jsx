import React from "react";
import CalendarDay from "./CalendarDayP.jsx";
import dateUtil from "../utils/dateUtil.js";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'
import getAppointmentsForMonth from '../utils/getAppointmentsForMonth.js'

//called by: BodyContainer
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

  const totalCells = blankStartCalendarDays.length + calendarDays.length + blankEndCalendarDays.length;
  const gridRows = Math.ceil(totalCells / 7);

  function handleLeftClick() {

  }
  function handleRightClick() {

  }

  return (
    <div className="flex flex-col mx-auto my-auto w-160 h-160 bg-white animate-slideIn">
      <div className="flex justify-between pt-3 pb-3 border-t-2 border-l-2 border-r-2 border-black bg-[#fafafa]">
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none ml-2 cursor-pointer" onClick={handleLeftClick}>{'<'}</button>
        <b className="text-xl">{currentDateObj.monthOfAppointment + 1} / {currentDateObj.yearOfAppointment}</b>
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none mr-2 cursor-pointer" onClick={handleRightClick}>{'>'}</button>
      </div>
      <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full border border-black`}>
        {blankStartCalendarDays}
        {calendarDays}
        {blankEndCalendarDays}
      </div>
    </div>
  );
}

export default CalendarStart;