import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainer.jsx"
import BodyContainer from "./BodyContainer.jsx"

const BASE_URL = 'http://localhost:8080';
const userId = '657f205517722b44fe9fda33';

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
  if (isUserLoading || isAppointmentsLoading) return <div>'Data is loading....'</div>;

  return (
    <>
      <AppointmentsContainer user={user} BASE_URL={BASE_URL} appointments={appointments} setActiveAppointmentId={setActiveAppointmentId} activeAppointmentId={activeAppointmentId} setPreviousActiveAppointmentId={setPreviousActiveAppointmentId} />
      <BodyContainer user={user} BASE_URL={BASE_URL} activeAppointmentId={activeAppointmentId} appointments={appointments} previousActiveAppointmentId={previousActiveAppointmentId}/>
    </>
  );

}

export default MainContainer;

