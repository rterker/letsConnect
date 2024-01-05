import React, { useState } from "react";
import DatePicker from './DatePicker.jsx';

//called by: ActiveDay
const ViewAndEditAppointment = ({ clickedAppointment, inEditMode, updateData, setUpdateData, availableDate, setAvailableDate, setAvailableTimes }) => {
  const { date, subject, participants, status, creator, potentialDates, createdAt} = clickedAppointment;

  //TO DO: set a flag for creator to only allow editing if you're the creator
  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //remember to add onChange for input fields we need to edit
  if (inEditMode) {
    return (
    <div className="flex flex-col h-full">
      <form className="flex flex-col p-4 min-h-80 bg-[#fafafa] animate-fadeIn">
        <p><u>Date</u>: {date ? date : 'TBD'}</p>
        <label htmlFor="subject"><u>Subject</u>: </label>
        <input name="subject" type="text" value={updateData.subject}  onChange={(e) => handleChange(e)} required/>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Participants</u>: {participants.map((participant, i) => {
          if (i === participants.length - 1) return participant;
          return participant + ', ';
          })}</p>
        <p><u>Status</u>: {status}</p>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Creator</u>: {creator}</p>
        <br />
      </form>
      <DatePicker dateString={Date()} availableDate={availableDate} setAvailableDate={setAvailableDate} setAvailableTimes={setAvailableTimes} />
    </div>
    );
  }
  //TO DO: when refresh button clicked, this should immediately show updated data
  return (
    <div className="p-4 h-full bg-[#fafafa] animate-fadeIn">
      <p><u>Date</u>: {date ? date : 'TBD'}</p>
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

export default ViewAndEditAppointment;