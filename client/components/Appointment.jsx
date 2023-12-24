import React from "react";

const Appointment = ({ appointment }) => {

  function handleClick() {
    //when div is clicked, render appointment stuff for that appointment in the BodyContainer. may need to move handleClick to MainContainer and pass down
  }

  //may need to change this logic once appointment dates are being created from the client
  const convertedDate = ((appointment.date/1000/60/60) + 5) * 60 * 60 * 1000;
  let date = new Date(convertedDate);
  date = date.toLocaleString('en-US', {timeZone: 'America/New_York'});

  return (
    <li className="flex hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]">
      <div className="w-full h-11 pl-4 pt-2.5 text-left overflow-hidden cursor-pointer" onClick={handleClick}>
        {date}
      </div>
    </li>
  );
}

export default Appointment;