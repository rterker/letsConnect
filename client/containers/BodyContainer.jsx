import React, { useState } from "react";
import ActiveAppointment from '../components/ActiveAppointment.jsx'
import getAppointmentsForMonth from '../utils/getAppointmentsForMonth.js'
import CalendarStart from "../components/CalendarStart.jsx";

const BodyContainer = ({ user, BASE_URL, activeAppointmentId, appointments, previousActiveAppointmentId }) => {
  //useState here?
  const currentDate = Date();
  const currentMonthAppointments = getAppointmentsForMonth(currentDate, appointments);

  //initial render when activeAppointmentId still has default useState value
  if (activeAppointmentId === 'not yet set') {
    return (
      <section className="flex justify-center content-center items-center bg-[#e7e6e1] flex-grow">
        <CalendarStart currentDate={currentDate} appointments={currentMonthAppointments}/>
      </section>
    );
  }

  let activeAppointment = appointments.filter(appointment => appointment._id === activeAppointmentId);
  if (activeAppointment.length > 1) throw new Error('Error occured in BodyContainer: activeAppointmentId matched with multiple appointment objects');
  activeAppointment = activeAppointment[0];
  let previousActiveAppointment = appointments.filter(appointment => appointment._id === previousActiveAppointmentId);
  if (previousActiveAppointment.length > 1) throw new Error('Error occured in BodyContainer: previousActiveAppointmentId matched with multiple appointment objects');
  previousActiveAppointment = previousActiveAppointment[0];

  
  return (
    <section className="flex justify-center content-center items-center bg-[#e7e6e1] flex-grow">
      <ActiveAppointment activeAppointment={activeAppointment} previousActiveAppointment={previousActiveAppointment} />
    </section>
  );
}

export default BodyContainer;

