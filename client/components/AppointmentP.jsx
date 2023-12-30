import React from "react";

//called by: AppointmentsContainer
const Appointment = ({ appointment, setActiveAppointmentId, activeAppointmentId, setPreviousActiveAppointmentId }) => {

  //may need to change this logic once appointment dates are being created from the client
  const convertedDate = ((appointment.date/1000/60/60) + 5) * 60 * 60 * 1000;
  let date = new Date(convertedDate);
  date = date.toLocaleString('en-US', {timeZone: 'America/New_York'});

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
          {date}
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