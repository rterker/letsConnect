import React, { useState } from "react";

//called by: DatePicker
const TimePicker = ({ time, setAvailableTimes, setDisplayTimes }) => {
  let displayTime = new Date(time);
  displayTime = displayTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

  function handleClick() {
    setAvailableTimes((prev) => prev.concat([time]));
    setDisplayTimes((prev) => prev.filter(element => element !== time));
  }

  return (
    <>
      <div className="h-9 w-24 p-1 text-base text-center bg-[#00bbf0] text-lg text-[#fafafa] rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer active:bg-[#2772db] active:text-[#fafafa]" onClick={handleClick}>
        {displayTime}
      </div>
    </>
  );
}

export default TimePicker;
