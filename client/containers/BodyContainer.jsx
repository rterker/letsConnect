import React from "react";
import ActiveAppointment from '../components/ActiveAppointment.jsx'

const BodyContainer = ({ user, BASE_URL, activeAppointmentId, appointments }) => {
  console.log('activeAppointmentId: ', activeAppointmentId);
  console.log('appointments: ', appointments);

  if (!activeAppointmentId) {
    return (
      <section className="bg-[#e7e6e1] flex-grow">
        No Active Appointment yet
      </section>
    );
  }

  let activeAppointment = appointments.filter(appointment => appointment._id === activeAppointmentId);
  if (activeAppointment.length > 1) throw new Error('Error occured in BodyContainer: activeAppointmentId matched with multiple appointment objects');
  activeAppointment = activeAppointment[0];

  return (
    <section className="flex justify-center content-center items-center bg-[#e7e6e1] flex-grow">
      <ActiveAppointment activeAppointment={activeAppointment} />
    </section>
  );
}

export default BodyContainer;