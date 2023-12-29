import React from "react";
import DaysDetails from "./DaysDetails.jsx";

const ActiveDay = ({ dailyAppointments, setActiveDay }) => {
  console.log('dailyAppointments in ActiveDay: ', dailyAppointments)


  return (
    <div className="flex justify-center items-center min-w-full min-h-full bg-[#3a7563]">
      <div className="w-156 h-156 bg-[#3a7563]">
        <DaysDetails dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
      </div>
    </div>
  );
}

export default ActiveDay;