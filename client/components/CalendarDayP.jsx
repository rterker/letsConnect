import React from "react";
import Dot from "./DotP.jsx";

//called by: CalendarStart, Calendar
const CalendarDay = ({ dateOfMonth, appointmentsForDay, setActiveDay }) => {
  function handleClick(e) {
    if (appointmentsForDay.length > 0) {
      setActiveDay(dateOfMonth);
    }
  }
  
  if (!appointmentsForDay) {
    return (
      <div className="bg-[#fafafa] border border-black">
        {dateOfMonth}
      </div>
    );
  }

  //TO DO: handle overflowing dots; used to have flex-wrap, but the div grew out of proportion
  return (
    <div className="flex flex-col bg-[#fafafa] border border-black cursor-pointer hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]" onClick={(e) => handleClick(e)}>
      <div>
      {dateOfMonth}
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