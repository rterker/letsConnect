import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainerP.jsx";
import BodyContainer from "./BodyContainer.jsx";
import config from '../config.js';

const BASE_URL = config.DEV_BASE_URL;
// const userId = config.TESTING_USER_ID;

const MainContainer = ({ user, isUserLoading, setIsLogged }) => {
  // const [user, setUser] = useState({});
  // const [isUserLoading, setIsUserLoading] = useState(true);
  const [isAppointmentsLoading, setIsAppointmentsLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  console.log('appointments in MainContainer:', appointments)
  const [shouldRefresh, setShouldRefresh] = useState(1); 
  const [clickedAppointment, setClickedAppointment] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   fetch(`${BASE_URL}/user/${user._id}`, controller.signal)
  //     .then(user => user.json())
  //     .then(user => {
  //       setUser(user);
  //       setIsUserLoading(false);
  //     })
  //     .catch(err => console.log(`The following error occured in MainContainer get user fetch: ${err}`));

  //   return () => {
  //     controller.abort();
  //   }
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    if (user._id) {
      console.log(`Fetching user ${user._id} appointments...`)
      fetch(`${BASE_URL}/appointments/${user._id}`, controller.signal)
      .then(appointments => appointments.json())
      .then(appointments => {
        setAppointments(appointments);
        setIsAppointmentsLoading(false);
      })
      .catch(err => console.log(`The following error occured in MainContainer get user appointments fetch: ${err}`));
      //may need to add appointments to dependencies if they don't update correctly
      return () => {
        controller.abort();
      }
    }
  }, [user, shouldRefresh]);

  //refactor to render a data loading component when data is loading
  if (isUserLoading || isAppointmentsLoading) {
    return (
      <div className="h-full w-full bg-[#fafafa]">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full bg-[#d3d6db]">
      <AppointmentsContainer user={user} BASE_URL={BASE_URL} appointments={appointments} showAppointments={showAppointments} setShowAppointments={setShowAppointments} setClickedAppointment={setClickedAppointment} />
      <BodyContainer user={user} BASE_URL={BASE_URL} appointments={appointments} setAppointments={setAppointments} showAppointments={showAppointments} setShowAppointments={setShowAppointments} setShouldRefresh={setShouldRefresh} clickedAppointment={clickedAppointment} setClickedAppointment={setClickedAppointment} setIsLogged={setIsLogged}/>
    </div>
  );

}

export default MainContainer;
