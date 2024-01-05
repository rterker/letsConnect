import React, { useState } from "react";
import DatePicker from './DatePicker.jsx';
import getCommonAvailabilities from '../utils/getCommonAvailabilities.js';

//called by: ActiveDay
const ViewAndEditAppointment = ({ clickedAppointment, inEditMode, updateData, setUpdateData, availableDate, setAvailableDate, setAvailableTimes }) => {
  const { date, subject, participants, status, creator, potentialDates, createdAt} = clickedAppointment;

  const commonAvailabilities = getCommonAvailabilities(potentialDates)

  //TO DO: set a flag for creator to only allow editing if you're the creator.
  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //TO DO: only allow edit mode if you're the creator of the appointment
  //TO DO: only show common availabilities if you're the creator
  if (inEditMode) {
    return (
    <div className="flex flex-col h-full">
      <form className="flex flex-col p-4 max-h-60 bg-[#fafafa] animate-fadeIn">
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
      {potentialDates.map(({ userName, availabilities }) => {
        return (
        <div className="p-4">
          <p><b>User Name</b>: {userName}</p>
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

export default ViewAndEditAppointment;