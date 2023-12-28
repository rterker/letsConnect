import React from "react";
import Dot from "./Dot.jsx";

const CalendarDay = ({ dateOfMonth, appointmentsForDay }) => {
  if (!dateOfMonth) {
    return (
      <div className="bg-white border border-black">
        {dateOfMonth}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white border border-black">
      <div>
      {dateOfMonth}
      </div>
      <div className="flex grow justify-center items-center gap-1 flex-wrap">
        {appointmentsForDay.map(appt => {
          if (appt) return <Dot/>;
          return;
        })}
      </div>
    </div>
  );
}

export default CalendarDay;