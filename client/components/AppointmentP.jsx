import { signal } from "@preact/signals-react";
import React from "react";

const isClickedAppointment = signal(null);

//called by: AppointmentsContainer
const Appointment = ({ appointment, activeDay, setActiveDay }) => {

  if (!activeDay) isClickedAppointment.value = null;

  const date = new Date(appointment.date);
  const dateString = date.toLocaleString('en-US');
  const apptMonth = date.getMonth();
  const apptDay = date.getDate();
  const apptYear = date.getFullYear();

  function handleClick(e) {
    if (!isClickedAppointment.value) isClickedAppointment.value = JSON.stringify(appointment);
    else if (JSON.stringify(appointment) !== JSON.stringify(isClickedAppointment.value.appointment)) isClickedAppointment.value = JSON.stringify(appointment);

    setActiveDay({
      day: apptDay,
      month: apptMonth,
      year: apptYear
    });
  }

  if (isClickedAppointment.value === JSON.stringify(appointment)) {
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