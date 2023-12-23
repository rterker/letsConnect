import React, { useEffect, useState } from "react";

const AppointmentsContainer = ({ user, origin }) => {
  //fetch appointments and render them
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`${origin}/appointment/user`);
  //may need to add appointments to dependencies if they don't update correctly
  }, []);

  return (
    <div className="bg-gray-300 w-72"></div>
  );  
}

export default AppointmentsContainer;