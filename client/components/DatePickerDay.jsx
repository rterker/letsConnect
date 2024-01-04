import React, { useState } from "react";

const DatePickerDay = ({ day, year, month, availableDate, setAvailableDate, isDateClicked, setIsDateClicked }) => {
  //only time isDateClicked is false is when clicked date is unclicked
  function handleClick() {
    if (!isDateClicked) {
      const availability = new Date();
      availability.setFullYear(year);
      availability.setMonth(month);
      availability.setDate(day);
      setAvailableDate(availability);
      setIsDateClicked(true);
    } else if (isDateClicked && (availableDate.getDate() === day && availableDate.getFullYear() === year && availableDate.getMonth() === month)) {
      setIsDateClicked(false);
      setAvailableDate(null);
    } else {
      const availability = new Date();
      availability.setFullYear(year);
      availability.setMonth(month);
      availability.setDate(day);
      setAvailableDate(availability);
    }
  }

  const clickedStyling = 'bg-[#537791] text-[#f7f6e7] border border-black cursor-pointer active:bg-[#537791] active:text-[#f7f6e7]';
  const unclickedStyling = 'bg-[#fafafa] border border-black cursor-pointer hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]';

  return (
    <div className={isDateClicked && availableDate.getDate() === day ? clickedStyling : unclickedStyling} onClick={handleClick}>
      {day}
    </div>
  );
}

export default DatePickerDay;