import React, { useState } from "react";
import getCommonAvailabilities from '../utils/getCommonAvailabilities.js';

//called by: ActiveDay
const DailyAppointment = ({ appointment, setClickedAppointment }) => {
  const { date, subject, participants, status, creator, potentialDates, createdAt} = appointment;

  let formattedDate;
  if (date) {
    formattedDate = new Date(date).toLocaleString();
  }

  const commonAvailabilities = getCommonAvailabilities(potentialDates)

  function handleClick() {
    if (date) setClickedAppointment({...appointment, date: formattedDate});
    else setClickedAppointment({...appointment});
  }

  //TO DO: only show common availabilities if you're the creator
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
      <br />
      <p><b>Availability</b>:</p>
      <br />
      {potentialDates.map(({ userName, availabilities }) => {
        return (
        <div>
          <p><u>User Name</u>: {userName}</p>
          {availabilities.map(availability => {
            if (!availability?.length) {
              return (
                <p>No Availabilities Set Yet</p>
              );
            } else {
              const formattedDate = new Date(availability);
              return (
                <div>
                  {formattedDate.toLocaleString()}
                </div>
              );
            }
          })}
        </div>
        );
      })}
      {
        commonAvailabilities.length > 0 &&
        <>
          <br /> 
          <b>Common Availabilities:</b>
          <br /> 
          {
          commonAvailabilities.map(dateTime => {
            const dateObj = new Date(dateTime);
            return dateObj.toLocaleString();
          })
          }
        </>
      }
    </div>
  );
}

export default DailyAppointment;

