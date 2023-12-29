import React, { useState } from "react";

//called by: DaysDetails
const DailyAppointment = ({ appointment }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { date, subject, participants, status, creator, createdAt} = appointment;

  function handleClick() {
    setIsClicked(true);
  }

  if (isClicked) {
    //render new component for editing and viewing appointment details
    //pass setIsClicked as a prop, so we can set to false, which will cause this to rerender and close the clicked component
  }

  return (
    <div className="p-4 snap-center cursor-pointer border border-black bg-[#537791] hover:bg-[#e7e6e1] active:bg-black active:text-[#f7f6e7]" onClick={handleClick}>
      <div>date: {date}</div>
      <div>subject: {subject}</div>
      <div>participants: {participants}</div>
      <div>status: {status}</div>
      <div>creator: {creator}</div>
      <div>createdAt: {createdAt}</div>
    </div>
  );
}

export default DailyAppointment;

