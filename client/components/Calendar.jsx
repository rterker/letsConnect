import React from "react";
import CalendarDay from "./CalendarDay.jsx";

const Calendar = () => {

  const calendarDays = [];
  for (let i = 0; i < 42; i++) {
    calendarDays.push(<CalendarDay id={i}/>);  
  }

  return (
    <div className="grid grid-rows-6 grid-cols-7 w-full h-full">
      {calendarDays}
    </div>
  );
}

export default Calendar;