import React from "react";
import DaysDetails from "./DaysDetailsP.jsx";

//called by: CalendarContainer
const ActiveDay = ({ dailyAppointments, setActiveDay }) => {
  console.log('dailyAppointments in ActiveDay: ', dailyAppointments)

  //remember to set bg color to fill in the gap
  return (
    <div className="flex justify-center items-center min-w-full min-h-full border-8 border-black bg-black rounded-lg">
        <DaysDetails dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
    </div>
  );
}

export default ActiveDay;

// return (
//   <div className="flex justify-center items-center min-w-full min-h-full bg-[#537791]">
//     <div className="w-156 h-156 border ">
//       <DaysDetails dailyAppointments={dailyAppointments} setActiveDay={setActiveDay}/>
//     </div>
//   </div>
// );