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
  const [activeAppointment, setActiveAppointment] = useState('');

  useEffect(() => {
    fetch(`${BASE_URL}/user/${userId}`)
      .then(user => user.json())
      .then(user => {
        setUser(user);
        setIsUserLoading(false);
      })
      .catch(err => console.log(`The following error occured in MainContainer get user fetch: ${err}`));

  }, []);

  useEffect(() => {
    if (user._id) {
      console.log(`Fetching user ${user._id} appointments...`)
      fetch(`${BASE_URL}/appointments/${user._id}`)
      .then(appointments => appointments.json())
      .then(appointments => {
        setAppointments(appointments);
        setIsAppointmentsLoading(false);
      })
      .catch(err => console.log(`The following error occured in MainContainer get user appointments fetch: ${err}`));
      //may need to add appointments to dependencies if they don't update correctly
    }
  }, [user]);

  if (isUserLoading || isAppointmentsLoading) return <div>'Data is loading....'</div>;

  return (
    <>
      <AppointmentsContainer user={user} BASE_URL={BASE_URL} appointments={appointments} setActiveAppointment={setActiveAppointment} />
      <BodyContainer user={user} BASE_URL={BASE_URL} activeAppointment={activeAppointment} appointments={appointments}/>
    </>
  );

}

export default MainContainer;

