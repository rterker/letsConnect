import React from "react";
import Dot from "./DotP.jsx";

//called by: Calendar
const CalendarDay = ({ day, year, month, appointmentsForDay, setActiveDay, setShowAppointments }) => {
  function handleClick(e) {
      setActiveDay({
        month,
        day,
        year
      });
      
      setShowAppointments(true);
  }
  
  if (!appointmentsForDay) {
    return (
      <div className="bg-[#fafafa] border-l border-b border-black">
        {day}
      </div>
    );
  }

  //TO DO: handle overflowing dots; used to have flex-wrap, but the div grew out of proportion
  return (
    <div className="flex flex-col bg-[#fafafa] border-l border-b border-black cursor-pointer hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]" onClick={(e) => handleClick(e)}>
      <div>
      {day}
      </div>
      <div className="flex grow justify-center items-center gap-1">
        {appointmentsForDay.map(appt => {
          if (appt) return <Dot/>;
          return;
        })}
      </div>
    </div>
  );
}

export default CalendarDay;