import React, { useState } from "react";

//called by: DatePicker
const TimePicker = ({ time, setAvailableTimes }) => {
console.log('availableTimes in TimePicker:', time)
  let displayTime = new Date(time);
  console.log('displayTime:', displayTime)
  displayTime = displayTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

  function handleClick() {
    // setAvailableTimes();
  }

  return (
    <>
      <div className="h-9 w-24 p-1 text-base text-center bg-[#c1c0b9] text-xl rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none">
        {displayTime}
      </div>
    </>
  );
}

export default TimePicker;