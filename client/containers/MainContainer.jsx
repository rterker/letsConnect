import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainer.jsx"
import BodyContainer from "./BodyContainer.jsx"


const MainContainer = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    function getUser(id) {
      fetch(`http://localhost:8080/user/${id}`)
        .then(user => user.json())
        .then(user => setUser(user))
        .catch(err => console.log(`The following error occured in getUser: ${err}`));
    } 
    getUser('657f205517722b44fe9fda33');
  }, []);

  return (
    <>
      <AppointmentsContainer className="bg-gray-300 w-72"/>
      <BodyContainer className="bg-black flex-grow"/>
    </>
  );
}

export default MainContainer;
