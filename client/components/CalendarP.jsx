import React from "react";
import CalendarDay from "./CalendarDayP.jsx";
import dateUtil from "../utils/dateUtil.js";
import getAppointmentsForDay from '../utils/getAppointmentsForDay.js'
import getAppointmentsForMonth from '../utils/getAppointmentsForMonth.js'

//called by: CalendarContainer
const Calendar = ({ activeAppointment, appointments, setActiveDay }) => {
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
    <>
      <div className="flex justify-between pt-3 pb-3 border-t-2 border-l-2 border-r-2 border-black bg-[#fafafa]">
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none ml-2 cursor-pointer">{'<'}</button>
        <b className="text-xl">{apptDate.monthOfAppointment} / {apptDate.yearOfAppointment}</b>
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none mr-2 cursor-pointer">{'>'}</button>
      </div>
      <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full border border-black`}>
        {blankStartCalendarDays}
        {calendarDays}
        {blankEndCalendarDays}
      </div>
    </>
  );
}

export default Calendar;