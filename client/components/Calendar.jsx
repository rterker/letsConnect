import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const Calendar = ({ activeAppointment }) => {

  //TO DO: create an object for all the date stuff here
  const dateOfActiveAppointment = new Date(activeAppointment.date);
  //format is YYYY
  const yearOfActiveAppointment = dateOfActiveAppointment.getFullYear();
  //getMonth is zero-indexed, so 0 is january 11 is december
  const monthOfActiveAppointment = dateOfActiveAppointment.getMonth();
  //integer between 1 and 31
  const dayOfActiveAppointment = dateOfActiveAppointment.getDate();
  const daysInMonth = getDaysInMonth(yearOfActiveAppointment, monthOfActiveAppointment);
  const startDay = getFirstDayOfMonth(yearOfActiveAppointment, monthOfActiveAppointment);
  const endDay = getLastDayOfMonth(yearOfActiveAppointment, monthOfActiveAppointment);

  //0 - 6, where 0 is sunday
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }
  //0 - 6, where 0 is sunday
  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDay();
  }
  //1 - 31
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  //add a unique key prop to each CalendarDay for react optimization
  const blankStartCalendarDays = [];
  for (let i = 0; i < startDay; i++) {
    blankStartCalendarDays.push(<CalendarDay />);  
  }
  //add a unique key prop to each CalendarDay for react optimization
  const calendarDays = [];
  for (let i = 1; i < daysInMonth + 1; i++) {
    calendarDays.push(<CalendarDay date={i}/>);
  }
  //add a unique key prop to each CalendarDay for react optimization
  const blankEndCalendarDays = [];
  for (let i = endDay + 1; i < 7; i++) {
    blankEndCalendarDays.push(<CalendarDay />);  
  }


  return (
    <div className="grid grid-rows-6 grid-cols-7 w-full h-full">
      {blankStartCalendarDays}
      {calendarDays}
      {blankEndCalendarDays}
    </div>
  );
}

export default Calendar;