import React, { useEffect, useState } from "react";
import Appointment from '../components/Appointment.jsx';

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

  if (isLoading) return <div>'Data is loading...'</div>

  const appointmentTimestamps = appointments.map(el => ({ ...el, date: Date.parse(el.date)}));
  const sortedAppointmentsDesc = appointmentTimestamps.toSorted((first, second) => second.date - first.date);

  return (
    <ol className="flex flex-col bg-[#f7f6e7] w-72 gap-2 overflow-auto text-center pt-3">
      {sortedAppointmentsDesc.map(appointment => <Appointment appointment={appointment} />)}
    </ol>
  );  
}

export default AppointmentsContainer;