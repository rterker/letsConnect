import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainer.jsx"
import BodyContainer from "./BodyContainer.jsx"

const BASE_URL = "http://localhost:8080";

const MainContainer = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    function getUser(id) {
      fetch(`${BASE_URL}/user/${id}`)
        .then(user => user.json())
        .then(user => setUser(user))
        .catch(err => console.log(`The following error occured in getUser: ${err}`));
    } 
    getUser('657f205517722b44fe9fda33');
  }, []);

  return (
    <>
      <AppointmentsContainer user={user} origin={BASE_URL}/>
      <BodyContainer user={user} origin={BASE_URL}/>
    </>
  );
}

export default MainContainer;
