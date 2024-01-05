import React, { useState } from "react";
import dateUtil from "../utils/dateUtil.js";
import DatePickerDay from "./DatePickerDay.jsx";
import TimePicker from "./TimePicker.jsx";

//called by: ViewAndEditAppointment
const DatePicker = ({ dateString }) => {
  const [currentDateString, setCurrentDateString] = useState(dateString);
  const [availableDate, setAvailableDate] = useState(null);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const currentDate = new dateUtil(currentDateString);

  const daysInMonth = dateUtil.getDaysInMonth(currentDate.yearOfAppointment, currentDate.monthOfAppointment);
  const startDay = dateUtil.getFirstDayOfMonth(currentDate.yearOfAppointment, currentDate.monthOfAppointment);
  const endDay = dateUtil.getLastDayOfMonth(currentDate.yearOfAppointment, currentDate.monthOfAppointment);

  //TO DO: add a unique key prop to each DatePickerDay for react optimization
  const blankStartCalendarDays = [];
  for (let i = 0; i < startDay; i++) {
    blankStartCalendarDays.push(<DatePickerDay />);  
  }
  //TO DO: add a unique key prop to each DatePickerDay for react optimization
  const calendarDays = [];
  for (let i = 1; i < daysInMonth + 1; i++) {
    const dateObj = {
      day: i,
      month: currentDate.monthOfAppointment,
      year: currentDate.yearOfAppointment
    };
    calendarDays.push(<DatePickerDay day={i} year={currentDate.yearOfAppointment} month={currentDate.monthOfAppointment} availableDate={availableDate} setAvailableDate={setAvailableDate} isDateClicked={isDateClicked} setIsDateClicked={setIsDateClicked} />);
  }
  //TO DO: add a unique key prop to each DatePickerDay for react optimization
  const blankEndCalendarDays = [];
  for (let i = endDay + 1; i < 7; i++) {
    blankEndCalendarDays.push(<DatePickerDay />);  
  }

  const totalCells = blankStartCalendarDays.length + calendarDays.length + blankEndCalendarDays.length;
  const gridRows = Math.ceil(totalCells / 7);

  function handleLeftClick() {
    const date = new Date(currentDateString);
    const newMonth = date.getMonth() - 1;
    date.setMonth(newMonth, 1);
    setCurrentDateString(date.toString());
  }
  function handleRightClick() {
    const date = new Date(currentDateString);
    const newMonth = date.getMonth() + 1;
    date.setMonth(newMonth, 28);
    setCurrentDateString(date.toString());
  }


  //TO DO: when date clicked, show times to choose underneath as buttons. when time is clicked. set some state which will eventually be sent to backend as availability
  return (
    <div className="flex flex-col mx-auto my-auto w-1/2 h-2/3 bg-[#fafafa] border-t border-r border-black animate-fadeIn">
      <div className="flex justify-between pt-3 pb-3 border-l border-b  border-black bg-[#fafafa]">
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none ml-2 cursor-pointer" onClick={handleLeftClick}>{'<'}</button>
        <b className="text-xl">{currentDate.monthOfAppointment + 1} / {currentDate.yearOfAppointment}</b>
        <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none mr-2 cursor-pointer" onClick={handleRightClick}>{'>'}</button>
      </div>
      <div className="flex">
        <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full `}>
          {blankStartCalendarDays}
          {calendarDays}
          {blankEndCalendarDays}
        </div>
        {isDateClicked && <TimePicker availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}
      </div>
    </div>
  );
}


export default DatePicker;