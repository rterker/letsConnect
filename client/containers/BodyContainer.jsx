import React, { useState } from "react";
import CalendarContainer from './CalendarContainerP.jsx'
import CalendarStart from "../components/CalendarStartP.jsx";
import AddAppointmentButton from "../components/AddAppointmentButtonP.jsx";
import AddAppointmentContainer from "../components/AddAppointmentContainerP.jsx";

//called by: MainContainer
const BodyContainer = ({ user, BASE_URL, appointments, activeDay, setActiveDay }) => {
  console.log('BodyContainer re-render')
  const [isInAddMode, setIsInAddMode] = useState(false);
  const [currentDate, setCurrentDate] = useState(Date());


  if (isInAddMode) {
    return (
      <section className="flex flex-col justify-start items-center flex-grow">
        <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
        <AddAppointmentContainer user={user} setIsInAddMode={setIsInAddMode} />
      </section>
    );
  }
  
  return (
    <section className="flex flex-col justify-start items-center flex-grow">
      <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
      <CalendarContainer currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setActiveDay={setActiveDay} activeDay={activeDay}/>
    </section>
  );
}

export default BodyContainer;

