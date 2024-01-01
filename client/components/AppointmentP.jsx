import React from "react";

//called by: AppointmentsContainer
const Appointment = ({ appointment, setActiveAppointmentId, activeAppointmentId, setPreviousActiveAppointmentId }) => {
  let date = new Date(appointment.date);
  date = date.toLocaleString('en-US');

  function handleClick(e) {
    setPreviousActiveAppointmentId(activeAppointmentId);
    if (appointment._id === activeAppointmentId) {
      console.log('handleClick invoked in Appointment. Unsetting activeAppoinmentId in MainContainer');
      return setActiveAppointmentId('');
    }
    console.log('handleClick invoked in Appointment. Setting activeAppoinmentId in MainContainer to: ', appointment._id);
    return setActiveAppointmentId(appointment._id);
  }

  if (appointment._id === activeAppointmentId) {
    return (
      <li className="flex bg-[#537791] text-[#f7f6e7] active:bg-[#537791] active:text-[#f7f6e7]">
        <div className="w-full h-11 pl-3 pr-3 pt-2.5 text-left overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" onClick={(e) => handleClick(e)}> 
          {appointment.subject}
        </div>
      </li>
    );
  }

  return (
    <li className="flex hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]">
      <div className="w-full h-11 pl-3 pr-3 pt-2.5 text-left overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" onClick={(e) => handleClick(e)}>
        {appointment.subject}
      </div>
    </li>
  );
}

export default Appointment;