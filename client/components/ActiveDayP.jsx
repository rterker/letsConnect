import React, { useState } from "react";
import DailyAppointment from './DailyAppointment.jsx';
import ViewAndEditAppointment from "./ViewAndEditAppointment.jsx";
import adaptValidateUpdateAppt from '../utils/adaptValidateUpdateAppt.js';

//called by: CalendarContainer
const ActiveDay = ({ user, confirmedAppointments, pendingAppointments, setAppointments, setActiveDay, setShowAppointments, clickedAppointment, setClickedAppointment }) => {
  const [inEditMode, setInEditMode] = useState(false);

  const clickedAppointmentCopy = JSON.parse(JSON.stringify(clickedAppointment));
  const [updateData, setUpdateData] = useState({...clickedAppointmentCopy});
  const [availableDate, setAvailableDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  let allAppointments;
  if (confirmedAppointments && pendingAppointments) {
    allAppointments = confirmedAppointments.concat(pendingAppointments);
  }

  //TO DO: useRef to store a copy of the initial clickedAppointment, so that after the edits are made, you can compare to see what needs updating

  function handleCancelClick() {
    setActiveDay(null);
    setShowAppointments(false);
    setClickedAppointment(null);
    setInEditMode(false);
  }

  function handleEditClick() {
    setInEditMode(true);
  }

  //TO DO: may need to set other state here like activeday and clicked appointment
  //TO DO: need to submit fetch with this save
  function handleSaveClick(e) {
    e.preventDefault();
    const availabilities = availableTimes.map(time => {
      const milliseconds = time - 18000000;
      const newTime = availableDate.setMilliseconds(milliseconds)
      availableDate.setMilliseconds(-milliseconds);
      return newTime;
    });
    adaptValidateUpdateAppt(user, updateData, clickedAppointmentCopy, setAppointments, availabilities);
    setInEditMode(false);
    setAvailableTimes([]);
    setAvailableDate(null);
  }

  let innerMarginR;
  let innerMarginL;
  if (clickedAppointment) {
    innerMarginR = 'mr-2';
    innerMarginL = 'ml-2';
  }

  //TO DO: remember to set bg color to fill in the gap
  return (
    <div className="w-160 h-160 mx-auto my-auto border border-black bg-[#fafafa]">
      <div className="flex flex-col w-full h-full animate-fadeIn ">
        <div className="h-full w-full overflow-auto snap-y snap-mandatory">
          {clickedAppointment ? <ViewAndEditAppointment clickedAppointment={clickedAppointment} inEditMode={inEditMode} updateData={updateData} setUpdateData={setUpdateData} availableDate={availableDate} setAvailableDate={setAvailableDate} setAvailableTimes={setAvailableTimes} /> : allAppointments.map(appt => <DailyAppointment appointment={appt} setClickedAppointment={setClickedAppointment} />)}
        </div>
        <div className="flex h-20 justify-center items-center w-full flex bg-[#537791] pt-4 pb-4 border-t-1 border-black">
          <button className={`h-12 w-36 ${innerMarginR} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none"`} onClick={handleCancelClick}>Cancel</button>
          {(clickedAppointment && !inEditMode) && <button className={`h-12 w-36  ${innerMarginL} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none`} onClick={handleEditClick}>Edit</button>}
          {inEditMode && <button className={`h-12 w-36  ${innerMarginL} bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none`} onClick={(e) => handleSaveClick(e)}>Save</button>}
        </div>
      </div>
    </div>
  );
}

export default ActiveDay;