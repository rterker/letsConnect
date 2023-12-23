import React, { useEffect, useState } from "react";

const AppointmentsContainer = ({ user, BASE_URL }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/appointments/${user._id}`)
      .then(appointments => appointments.json())
      .then(appointments => {
        setAppointments(appointments);
        setIsLoading(false);
      })
      .catch(err => console.log(`The following error occured in AppointmentsContainer fetch: ${err}`));
  //may need to add appointments to dependencies if they don't update correctly
  }, []);

  if (isLoading) return <div>'...isLoading'</div>

  return (
    <div className="bg-gray-300 w-72">
      {appointments.map(appointment => <div>{appointment.subject}</div>)}
    </div>
  );  
}

export default AppointmentsContainer;