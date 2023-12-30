import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainerP.jsx";
import BodyContainer from "./BodyContainer.jsx";
import config from '../config.js';

const BASE_URL = config.DEV_BASE_URL;
const userId = config.TESTING_USER_ID;

const MainContainer = () => {
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isAppointmentsLoading, setIsAppointmentsLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [activeAppointmentId, setActiveAppointmentId] = useState('not yet set');
  const [previousActiveAppointmentId, setPreviousActiveAppointmentId] = useState('not yet set');

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${BASE_URL}/user/${userId}`, controller.signal)
      .then(user => user.json())
      .then(user => {
        setUser(user);
        setIsUserLoading(false);
      })
      .catch(err => console.log(`The following error occured in MainContainer get user fetch: ${err}`));

    return () => {
      controller.abort();
    }
  }, []);

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
  }, [user]);

  //refactor to render a data loading component when data is loading
  if (isUserLoading || isAppointmentsLoading) {
    return (
      <div className="h-full w-full bg-[#392f2f]">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    );
  }

  return (
    <>
      <AppointmentsContainer user={user} BASE_URL={BASE_URL} appointments={appointments} setActiveAppointmentId={setActiveAppointmentId} activeAppointmentId={activeAppointmentId} setPreviousActiveAppointmentId={setPreviousActiveAppointmentId} />
      <BodyContainer user={user} BASE_URL={BASE_URL} activeAppointmentId={activeAppointmentId} appointments={appointments} previousActiveAppointmentId={previousActiveAppointmentId}/>
    </>
  );

}

export default MainContainer;

