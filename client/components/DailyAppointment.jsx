import React, { useState } from "react";

//called by: ActiveDay
const DailyAppointment = ({ appointment, setClickedAppointment }) => {
  const { date, subject, participants, status, creator, potentialDates, createdAt} = appointment;
  console.log('potentialDates in DailyAppointment:', potentialDates)

  let formattedDate;
  if (date) {
    formattedDate = new Date(date).toLocaleString();
  }

  function handleClick() {
    if (date) setClickedAppointment({...appointment, date: formattedDate});
    else setClickedAppointment({...appointment});
  }

  return (
    <div className="p-4 snap-center cursor-pointer bg-[#fafafa] hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]" onClick={handleClick}>
      <p><u>Date</u>: {formattedDate ? formattedDate : 'TBD'}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Subject</u>: {subject}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Participants</u>: {participants.map((participant, i) => {
        if (i === participants.length - 1) return participant;
        return participant + ', ';
        })}</p>
      <p><u>Status</u>: {status}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Creator</u>: {creator}</p>
      <p><u>Availability</u>:</p>
      <br />
      {potentialDates.map(({ userName, availabilities }) => {
        return (
        <>
          <p><b>User Name</b>: {userName}</p>
          {availabilities.map(availability => {
            if (availability) {
              const formattedDate = new Date(availability);
              return (
                <div>
                  {formattedDate.toLocaleString()}
                </div>
              );
            } else {
              return (
                <p>No Availabilities Set Yet</p>
              )
            }
          })}
        </>
        );
      })}
    </div>
  );
}

export default DailyAppointment;


// [#537791]

