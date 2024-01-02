import React, { useState } from "react";

//called by: ActiveDay
const ViewAndEditAppointment = ({ appointment, inEditMode }) => {
  const { date, subject, participants, status, creator, createdAt} = appointment;
  //TO DO: use state to load inital value in input fields and then to handle changes
  const [formData, setFormDate] = useState();
  let formattedDate = new Date(date).toLocaleString();

  //TO DO: set a flag for creator to only allow editing if you're the creator
  //TO DO: handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  
  if (inEditMode) {
    return (
    <form className="flex flex-col p-4 h-full border border-black bg-[#e7e6e1] animate-fadeIn">
      <label htmlFor="date"><u>Date</u>: </label>
      <input name="date" type="text" value={formattedDate} required/>
      <label htmlFor="subject"><u>Subject</u>: </label>
      <input name="subject" type="text" value={subject} required/>
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
      <p><u>Date</u>: {formattedDate}</p>
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