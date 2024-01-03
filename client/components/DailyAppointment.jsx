import React, { useState } from "react";

//called by: ActiveDay
const DailyAppointment = ({ appointment, setClickedAppointment }) => {
  const { date, subject, participants, status, creator, createdAt} = appointment;

  let formattedDate;
  if (date) {
    formattedDate = new Date(date).toLocaleString();
  }

  function handleClick() {
    if (date) setClickedAppointment({...appointment, date: formattedDate});
    else setClickedAppointment({...appointment});
  }

  return (
    <div className="p-4 snap-center cursor-pointer border border-black bg-[#537791] hover:bg-[#e7e6e1] active:bg-black active:text-[#f7f6e7]" onClick={handleClick}>
      <p><u>Date</u>: {formattedDate ? formattedDate : 'TBD'}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Subject</u>: {subject}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Participants</u>: {participants.map((participant, i) => {
        if (i === participants.length - 1) return participant;
        return participant + ', ';
        })}</p>
      <p><u>Status</u>: {status}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Creator</u>: {creator}</p>
    </div>
  );
}

export default DailyAppointment;

