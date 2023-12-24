import React, { useEffect, useState } from "react";
import AppointmentsContainer from "./AppointmentsContainer.jsx"
import BodyContainer from "./BodyContainer.jsx"

const BASE_URL = 'http://localhost:8080';
const userId = '657f205517722b44fe9fda33';

const MainContainer = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/user/${userId}`)
      .then(user => user.json())
      .then(user => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(err => console.log(`The following error occured in MainContainer getUser fetch: ${err}`));
  }, []);


  if (isLoading) return <div>'Data is loading....'</div>;

  return (
    <>
      <AppointmentsContainer user={user} BASE_URL={BASE_URL}/>
      <BodyContainer user={user} BASE_URL={BASE_URL}/>
    </>
  );

}

export default MainContainer;

