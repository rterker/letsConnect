import React from "react";

//called by: AppointmentsContainer
const Appointment = ({ appointment, activeDay, setActiveDay }) => {
  const date = new Date(appointment.date);
  const dateString = date.toLocaleString('en-US');
  console.log('ActiveDay in Appointment: ', activeDay)
  const apptMonth = date.getMonth();
  const apptDay = date.getDate();
  const apptYear = date.getFullYear();

  function handleClick(e) {
    setActiveDay({
      day: apptDay,
      month: apptMonth,
      year: apptYear
    });
  }

  function isAppointmentInActiveDay() {
    return (apptMonth === activeDay?.month && apptDay === activeDay?.day && apptYear=== activeDay?.year);
  }

  if (isAppointmentInActiveDay()) {
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