import React, { useEffect, useState } from "react";
import adaptValidatePostAppt from '../utils/adaptValidatePostAppt.js';
import DatePicker from "./DatePicker.jsx";

//called by: AddAppointmentContainer
const AddAppointment = ({ user, setAppointments, setIsInAddMode }) => {
  const [formData, setFormData] = useState({subject: '', participants: '', potentialDates: [], status: 'pending', creator: user.userName});
  const [availableDate, setAvailableDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  //TO DO: add some state to update with the response after successful post of new appointment

  function handleCancel() {
    setIsInAddMode(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const availabilities = availableTimes.map(time => {
      const milliseconds = time - 18000000;
      const newTime = availableDate.setMilliseconds(milliseconds)
      availableDate.setMilliseconds(-milliseconds);
      return newTime;
    });
    adaptValidatePostAppt(user.userName, formData, setAppointments, availabilities);
    setIsInAddMode(false);  
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //input values for forms are type string
  return (
    //TO DO: remove overflow-auto later, keeping it in just in case date picker overflows
    <>
      <div className="h-full w-full overflow-auto">
        <form className="flex flex-col gap-4 p-4 h-full max-h-60 bg-[#fafafa] animate-fadeIn">
          <p><u>Date</u>: TBD</p>
          <label htmlFor="subject"><u>Subject</u>:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={(e) => handleChange(e)} required/>
          <label htmlFor="participants"><u>Participants</u>:</label>
          <input type="text" id="participants" name="participants" value={formData.participants} onChange={(e) => handleChange(e)} required/>
        </form>
      </div>
      <DatePicker dateString={Date()} availableDate={availableDate} setAvailableDate={setAvailableDate} setAvailableTimes={setAvailableTimes} />
      <div className="flex h-20 justify-center items-center space-x-4 w-full flex bg-[#537791] pt-4 pb-4 border-t-1 border-black">
        <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleCancel}>Cancel</button>
        <button type="submit" className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
    </>
  );
}

export default AddAppointment;
 