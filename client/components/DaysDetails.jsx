import React from "react";

const DaysDetails = ({ dailyAppointments, setActiveDay }) => {
  console.log('dailyAppointments in DayDetails: ', dailyAppointments)
  function handleClick(e) {
    setActiveDay(null);
  }

  return (
    <div className="flex flex-col h-156 w-156">
      <div className="grow w-full bg-red-300">
      </div>
      <div className="flex h-20 justify-center items-center w-full flex bg-[#f7f6e7]">
        <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner  focus:outline-none" onClick={(e) => handleClick(e)}>Cancel</button>
      </div>
    </div>
  );
}

export default DaysDetails;