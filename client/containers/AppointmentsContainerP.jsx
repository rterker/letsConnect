import React, { useEffect, useState } from "react";
import Appointment from '../components/AppointmentP.jsx';

//called by: MainContainer
const AppointmentsContainer = ({ user, BASE_URL, appointments, activeDay, setActiveDay, setClickedAppointment }) => {
  const appointmentTimestamps = appointments.map(el => ({ ...el, date: Date.parse(el.date)}));
  const sortedAppointmentsAsc = appointmentTimestamps.toSorted((first, second) => first.date - second.date);

  return (
    <ol className="flex flex-col bg-[#f7f6e7] w-72 gap-2 overflow-auto text-center pt-3 animate-sideBarSlideIn">
      {sortedAppointmentsAsc.map(appointment => <Appointment appointment={appointment} activeDay={activeDay} setActiveDay={setActiveDay} setClickedAppointment={setClickedAppointment} key={appointment._id} />)}
    </ol>
  );  
}

export default AppointmentsContainer;