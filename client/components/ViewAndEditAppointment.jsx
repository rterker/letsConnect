import React, { useState } from "react";

//called by: ActiveDay
const ViewAndEditAppointment = ({ clickedAppointment, setClickedAppointment, inEditMode }) => {
  const { date, subject, participants, status, creator, createdAt} = clickedAppointment;

  //TO DO: set a flag for creator to only allow editing if you're the creator
  function handleChange(e) {
    const { name, value } = e.target;
    setClickedAppointment((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //remember to add onChange for input fields we need to edit
  if (inEditMode) {
    return (
    <form className="flex flex-col p-4 h-full border border-black bg-[#e7e6e1] animate-fadeIn">
      <p><u>Date</u>: {date ? date : 'TBD'}</p>
      <label htmlFor="subject"><u>Subject</u>: </label>
      <input name="subject" type="text" value={subject}  onChange={(e) => handleChange(e)} required/>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Participants</u>: {participants.map((participant, i) => {
        if (i === participants.length - 1) return participant;
        return participant + ', ';
        })}</p>
      <p><u>Status</u>: {status}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Creator</u>: {creator}</p>
    </form>
    );
  }

  return (
    <div className="p-4 h-full border border-black bg-[#e7e6e1] animate-fadeIn">
      <p><u>Date</u>: {date ? date : 'TBD'}</p>
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

export default ViewAndEditAppointment;