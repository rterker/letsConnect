import React, { useState } from "react";
import DatePicker from './DatePicker.jsx';
import getCommonAvailabilities from '../utils/getCommonAvailabilities.js';

//called by: ActiveDay
const ViewAndEditAppointment = ({ userName, clickedAppointment, inEditMode, updateData, setUpdateData, availableDate, setAvailableDate, setAvailableTimes, confirmedAppointmentDateTime, setConfirmedAppointmentDateTime }) => {
  const { date, subject, participants, status, creator, potentialDates, createdAt} = clickedAppointment; 
  //TO DO: have appt updates automatically rerender after update. may have to do with this clickedAppointment. Should be reading other state instead or in addition to clickedAppointment

  const commonAvailabilities = getCommonAvailabilities(potentialDates)

  //TO DO: set a flag for creator to only allow editing if you're the creator.
  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  function handleClick(dateTime) {
    if (!confirmedAppointmentDateTime) return setConfirmedAppointmentDateTime(dateTime);
    return setConfirmedAppointmentDateTime(null);
  }

  const clickedTimesStyle = 'h-9 w-52 p-1 text-base text-center bg-[#2772db] text-lg text-[#fafafa] rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer active:bg-[#2772db] active:text-[#fafafa]';
  const unclickedTimesStyle = 'h-9 w-52 p-1 text-base text-center bg-[#00bbf0] text-lg text-[#fafafa] rounded-full shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer active:bg-[#2772db] active:text-[#fafafa]';


  if (status === 'confirmed') {
    return (
      <div className="p-4 snap-center cursor-pointer bg-[#fafafa] hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7] border border-[#d3d6db]">
      <p><u>Date</u>: {date}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Subject</u>: {subject}</p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Participants</u>: {participants.map((participant, i) => {
        if (i === participants.length - 1) return participant;
        return participant + ', ';
        })}</p>
      <p><u>Status</u>: <span className="text-red-500">{status}</span></p>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis"><u>Creator</u>: {creator}</p>
    </div>
    );
  }

  //only show confirm buttons if you're the creator
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
        <p>{commonAvailabilities.length > 0 && userName === creator ? <b>Common Availabilities</b> : <b>Availability</b>}:</p>
      </form>
      {
        commonAvailabilities.length === 0 && potentialDates.map(({ userName, availabilities }) => {
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
        })
      }
      {
        commonAvailabilities.length > 0 && (userName !== creator) && potentialDates.map(({ userName, availabilities }) => {
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
        })
      }
      {
        commonAvailabilities.length > 0 && userName === creator &&
        <div className="flex p-4 gap-4">
          {
            commonAvailabilities.map(commonAvailability => {
              const dateTime = new Date(commonAvailability).toLocaleString();
              return (
                <>
                  <div className={confirmedAppointmentDateTime ? clickedTimesStyle : unclickedTimesStyle} onClick={(e) => handleClick(dateTime)}>
                    {dateTime}
                  </div>
                </> 
              )
            })
          }
        </div>
      }
      <DatePicker dateString={Date()} availableDate={availableDate} setAvailableDate={setAvailableDate} setAvailableTimes={setAvailableTimes} />
    </div>
    );
  }

  //only show common availabilities if you're the creator
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
        commonAvailabilities.length > 0 && (userName === creator) &&
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