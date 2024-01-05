import React, { useState } from "react";

//called by: DatePicker
const TimePicker = ({ time, displayTimes, setAvailableTimes, clickedTimes, setClickedTimes }) => {

  let displayTime = new Date(time);
  displayTime = displayTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

  function handleClick() {
    setAvailableTimes((prev) => {
      if (prev.includes(time)) return prev.filter(element => element !== time);
      return prev.concat([time]);
    });
    setClickedTimes((prev) => {
      if (prev.includes(time)) return prev.filter(element => element !== time);
      return prev.concat([time]);
    });
  }

  const clickedTimesStyle = 'h-9 w-24 p-1 text-base text-center bg-[#2772db] text-lg text-[#fafafa] rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer active:bg-[#2772db] active:text-[#fafafa]';
  const unclickedTimesStyle = 'h-9 w-24 p-1 text-base text-center bg-[#00bbf0] text-lg text-[#fafafa] rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer active:bg-[#2772db] active:text-[#fafafa]';

  return (
    <>
      <div className={clickedTimes.includes(time) ? clickedTimesStyle : unclickedTimesStyle} onClick={handleClick}>
        {displayTime}
      </div>
    </>
  );
}

export default TimePicker;
