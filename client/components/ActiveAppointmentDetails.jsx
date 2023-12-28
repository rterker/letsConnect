import React from "react";

const ActiveAppointmentDetails = ({ dailyAppointments, setActiveDay }) => {

  function handleClick(e) {
    setActiveDay(null);
  }

  return (
    <div className="w-160 h-160 bg-[#3a7563] " onClick={(e) => handleClick(e)}>
    </div>
  );
}

export default ActiveAppointmentDetails;