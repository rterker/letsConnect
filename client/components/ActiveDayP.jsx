import React, { useState } from "react";
import DailyAppointment from './DailyAppointment.jsx';
import ViewAndEditAppointment from "./ViewAndEditAppointment.jsx";

//called by: CalendarContainer
const ActiveDay = ({ dailyAppointments, setActiveDay }) => {
  console.log('dailyAppointments in ActiveDay: ', dailyAppointments)
  const [clickedAppointment, setClickedAppointment] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);

  function handleCancelClick() {
    setActiveDay(null);
    setClickedAppointment(null);
    setInEditMode(false);
  }

  function handleEditClick() {
    setInEditMode(true);
  }

  //TO DO: may need to set other state here like activeday and clicked appointment
  //TO DO: need to submit fetch with this save
  function handleSaveClick() {
    setInEditMode(false);
  }

  let innerMarginR;
  let innerMarginL;
  if (clickedAppointment) {
    innerMarginR = 'mr-2';
    innerMarginL = 'ml-2';
  }

  //TO DO: remember to set bg color to fill in the gap
  return (
    <div className="w-160 h-160 mx-auto my-auto animate-fadeIn ">
      <div className="flex justify-center items-center min-w-full min-h-full border-8 border-black bg-black rounded-lg">
        <div className="flex flex-col h-160 w-160 ">
          <div className="h-full w-full bg-black overflow-auto snap-y snap-mandatory rounded-lg">
            {clickedAppointment ? <ViewAndEditAppointment appointment={clickedAppointment} inEditMode={inEditMode} /> : dailyAppointments.map(appt => <DailyAppointment appointment={appt} setClickedAppointment={setClickedAppointment} />)}
          </div>
            <div className="flex h-20 justify-center items-center w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
              <button className={`h-12 w-36 ${innerMarginR} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none"`} onClick={handleCancelClick}>Cancel</button>
              {(clickedAppointment && !inEditMode) && <button className={`h-12 w-36  ${innerMarginL} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none`} onClick={handleEditClick}>Edit</button>}
              {inEditMode && <button className={`h-12 w-36  ${innerMarginL} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none`} onClick={handleSaveClick}>Save</button>}
            </div>
        </div>
      </div>
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