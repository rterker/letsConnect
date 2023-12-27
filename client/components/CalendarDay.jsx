import React from "react";

const CalendarDay = ({ date }) => {

  return (
    <div className="bg-white border border-black">
      {date}
    </div>
  );
}

export default CalendarDay;