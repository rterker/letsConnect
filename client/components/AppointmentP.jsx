import { signal } from "@preact/signals-react";
import React from "react";

const isClickedAppointment = signal(null);

//called by: AppointmentsContainer
const Appointment = ({ appointment, showAppointments, setShowAppointments, setClickedAppointment }) => {
  console.log('appointment in Appointment:', appointment)
  //TO DO: need to make sure that activeDay is only set here when appointment is confirmed

  //TO DO: remove active day setting from this component

  if (!showAppointments) isClickedAppointment.value = null;

  // const date = new Date(appointment.date);
  // const dateString = date.toLocaleString('en-US');
  // const apptMonth = date.getMonth();
  // const apptDay = date.getDate();
  // const apptYear = date.getFullYear();

  function handleClick(e) {
    if (!isClickedAppointment.value) isClickedAppointment.value = JSON.stringify(appointment);
    else if (JSON.stringify(appointment) !== JSON.stringify(isClickedAppointment.value.appointment)) isClickedAppointment.value = JSON.stringify(appointment);

    if (!appointment.date) {
      setClickedAppointment(appointment);
    } else {
      const date = new Date(appointment.date);
      const formattedDate = date.toLocaleString();
      setClickedAppointment({...appointment, date: formattedDate});
    }

    //TO DO: will need to refactor. this should be setting an object with day, month, year; however for now we're just setting to true, so the view and edit modal
    //opens up on clicking the appointment
    setShowAppointments(true);

    // setActiveDay({
    //   day: apptDay,
    //   month: apptMonth,
    //   year: apptYear
    // });
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
