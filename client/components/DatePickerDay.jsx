import React from "react";

const DatePickerDay = ({ day, year, month, setAvailableDay }) => {

  function handleClick() {
    // setAvailableDay();
  }

  return (
    <div className="bg-[#fafafa] border border-black cursor-pointer hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]">
      {day}
    </div>
  );
}

export default DatePickerDay;