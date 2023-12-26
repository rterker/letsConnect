import React from "react";

const CalendarDay = ({ date }) => {

  return (
    <div className="bg-red-200 border border-indigo-600">
      {date}
    </div>
  );
}

export default CalendarDay;