import React from "react";

const DatePickerDay = ({ day, year, month, setAvailabilities }) => {

  //TO DO: don't concat array, set the date value. only want to set one day at a time and then clear out state in DatePicker
  //may allow setting multiple times in DatePicker or another component
  function handleClick() {
    let newAvailabilities;
    const availableDate = new Date();
    availableDate.setFullYear(year);
    availableDate.setMonth(month);
    availableDate.setDate(day);
    newAvailabilities = [availableDate];
    setAvailabilities((prev) => prev.concat(newAvailabilities));
  }

  return (
    <div className="bg-[#fafafa] border border-black cursor-pointer hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]" onClick={handleClick}>
      {day}
    </div>
  );
}

export default DatePickerDay;