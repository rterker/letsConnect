import React from "react";
import DailyAppointment from './DailyAppointment.jsx';

//called by: ActiveDay
const DaysDetails = ({ dailyAppointments, setActiveDay }) => {
  console.log('dailyAppointments in DayDetails: ', dailyAppointments)
  function handleClick(e) {
    setActiveDay(null);
  }

  return (
    <div className="flex flex-col h-160 w-160 ">
      <div className="flex flex-col grow w-full bg-black overflow-auto snap-y snap-mandatory gap-2 rounded-lg">
        {dailyAppointments.map(appt => <DailyAppointment appointment={appt}/>)}
      </div>
      <div className="flex h-20 justify-center items-center w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
        <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={(e) => handleClick(e)}>Cancel</button>
      </div>
    </div>
  );
}

export default DaysDetails;
