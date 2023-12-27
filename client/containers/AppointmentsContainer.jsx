import React, { useEffect, useState } from "react";
import Appointment from '../components/Appointment.jsx';

const AppointmentsContainer = ({ user, BASE_URL, appointments, setActiveAppointmentId, activeAppointmentId, setPreviousActiveAppointmentId }) => {
  const appointmentTimestamps = appointments.map(el => ({ ...el, date: Date.parse(el.date)}));
  const sortedAppointmentsDesc = appointmentTimestamps.toSorted((first, second) => second.date - first.date);

  return (
    <ol className="flex flex-col bg-[#f7f6e7] w-72 gap-2 overflow-auto text-center pt-3">
      {sortedAppointmentsDesc.map(appointment => <Appointment appointment={appointment} setActiveAppointmentId={setActiveAppointmentId} activeAppointmentId={activeAppointmentId} setPreviousActiveAppointmentId={setPreviousActiveAppointmentId} key={appointment._id} />)}
    </ol>
  );  
}

export default AppointmentsContainer;