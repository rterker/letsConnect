import React, { useState } from "react";
import CalendarContainer from './CalendarContainerP.jsx'
import CalendarStart from "../components/CalendarStartP.jsx";
import AddAppointmentButton from "../components/AddAppointmentButtonP.jsx";
import AddAppointmentContainer from "../components/AddAppointmentContainerP.jsx";

//called by: MainContainer
const BodyContainer = ({ user, BASE_URL, activeAppointmentId, appointments, previousActiveAppointmentId }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [isInAddMode, setIsInAddMode] = useState(false);
  const currentDate = Date();


  if (isInAddMode) {
    return (
      <section className="flex flex-col justify-start items-center bg-[#e7e6e1] flex-grow">
        <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
        <AddAppointmentContainer user={user} setIsInAddMode={setIsInAddMode} />
      </section>
    );
  }

  //initial render when activeAppointmentId still has default useState value
  if (activeAppointmentId === 'not yet set' && !activeDay) {
    return (
      <section className="flex flex-col justify-start items-center bg-[#e7e6e1] flex-grow">
        <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
        <CalendarStart currentDate={currentDate} appointments={appointments} setActiveDay={setActiveDay}/>
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
    <section className="flex flex-col justify-start items-center bg-[#e7e6e1] flex-grow">
      <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
      <CalendarContainer activeAppointment={activeAppointment} previousActiveAppointment={previousActiveAppointment} appointments={appointments} setActiveDay={setActiveDay} activeDay={activeDay} />
    </section>
  );
}

export default BodyContainer;

