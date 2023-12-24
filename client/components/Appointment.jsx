import React from "react";

const Appointment = ({ appointment, setActiveAppointment }) => {

  //may need to change this logic once appointment dates are being created from the client
  const convertedDate = ((appointment.date/1000/60/60) + 5) * 60 * 60 * 1000;
  let date = new Date(convertedDate);
  date = date.toLocaleString('en-US', {timeZone: 'America/New_York'});

  function handleClick(e) {
    console.log('handleClick invoked in Appointment. Setting activeAppoinment in MainContainer to: ', appointment._id);
    setActiveAppointment(appointment._id);
  }

  return (
    <li className="flex hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]">
      <div className="w-full h-11 pl-3 pr-3 pt-2.5 text-left overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" onClick={(e) => handleClick(e)}>
        {date}
      </div>
    </li>
  );
}

export default Appointment;