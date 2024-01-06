import React, { useState } from "react";
import CalendarContainer from './CalendarContainerP.jsx'
import AddAppointmentButton from "../components/AddAppointmentButtonP.jsx";
import AddAppointmentContainer from "../components/AddAppointmentContainerP.jsx";
import RefreshButton from "../components/RefreshButton.jsx";
import LogoutButton from "../components/LogoutButton.jsx";

//called by: MainContainer
const BodyContainer = ({ user, BASE_URL, appointments, setAppointments, showAppointments, setShowAppointments, setShouldRefresh, clickedAppointment, setClickedAppointment, setIsLogged }) => {
  const [isInAddMode, setIsInAddMode] = useState(false);
  const [currentDate, setCurrentDate] = useState(Date());


  if (isInAddMode) {
    return (
      <section className="flex flex-col justify-start items-center flex-grow">
        <div className="flex w-full justify-between">
          <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
          <RefreshButton setShouldRefresh={setShouldRefresh}/>
          <LogoutButton setIsLogged={setIsLogged}/>
        </div>
        <AddAppointmentContainer user={user} setAppointments={setAppointments} setIsInAddMode={setIsInAddMode} />
      </section>
    );
  }
  
  return (
    <section className="flex flex-col justify-start items-center flex-grow">
      <div className="flex w-full justify-between">
        <AddAppointmentButton isInAddMode={isInAddMode} setIsInAddMode={setIsInAddMode} />
        <RefreshButton setShouldRefresh={setShouldRefresh}/>
        <LogoutButton setIsLogged={setIsLogged}/>
      </div>
      <CalendarContainer user={user} currentDate={currentDate} setCurrentDate={setCurrentDate} appointments={appointments} setAppointments={setAppointments} showAppointments={showAppointments} setShowAppointments={setShowAppointments} clickedAppointment={clickedAppointment} setClickedAppointment={setClickedAppointment} />
    </section>
  );
}

export default BodyContainer;

