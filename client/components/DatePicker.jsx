import React, { useState, useRef } from "react";
import dateUtil from "../utils/dateUtil.js";
import DatePickerDay from "./DatePickerDay.jsx";
import TimePicker from "./TimePicker.jsx";

//called by: ViewAndEditAppointment
const DatePicker = ({ dateString, availableDate, setAvailableDate, setAvailableTimes }) => {
  const [currentDateString, setCurrentDateString] = useState(dateString);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const displayTimes = useRef([54000000, 57600000, 61200000, 64800000, 68400000, 72000000]);
  const [clickedTimes, setClickedTimes] = useState([]);
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
    <div className="flex justify-center w-full h-full bg-[#fafafa] border-black animate-fadeIn">
      <div className=" p-4 h-full w-1/2">
        <div className="flex justify-between pt-3 pb-3 border-l border-t border-r border-black bg-[#fafafa]">
          <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none ml-2 cursor-pointer" onClick={handleLeftClick}>{'<'}</button>
          <b className="text-xl">{currentDate.monthOfAppointment + 1} / {currentDate.yearOfAppointment}</b>
          <button className="w-10 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none mr-2 cursor-pointer" onClick={handleRightClick}>{'>'}</button>
        </div>
        <div className="flex border-r border-b border-black h-3/4 max-h-3/4">
          <div className={`grid grid-rows-${gridRows} grid-cols-7 w-full h-full `}>
            {blankStartCalendarDays}
            {calendarDays}
            {blankEndCalendarDays}
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-10 pr-10 pt-12 pb-12 ">
        <div className="flex flex-wrap gap-4">
          {isDateClicked && displayTimes.current.map(time => <TimePicker time={time} displayTimes={displayTimes} setAvailableTimes={setAvailableTimes} clickedTimes={clickedTimes} setClickedTimes={setClickedTimes}/>)}
        </div>
      </div>
    </div>
  );
}


export default DatePicker;