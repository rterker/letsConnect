import React, { useEffect, useState } from "react";
import adaptValidatePostAppt from '../utils/adaptValidatePostAppt.js';

//called by: AddAppointmentContainer
//currently not using user
const AddAppointment = ({ user, setAppointments, setIsInAddMode }) => {
  const [formData, setFormData] = useState({subject: '', participants: '', potentialDates: '', status: 'pending', creator: user.email});

  //TO DO: add some state to update with the response after successful post of new appointment

  function handleCancel() {
    setIsInAddMode(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    adaptValidatePostAppt(formData, setAppointments);
    setIsInAddMode(false);  
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //input values for forms are type string
  return (
    <div className="flex flex-col h-160 w-160">
      <form className="flex flex-col grow w-full bg-white rounded-lg">
        <div className="flex flex-col grow w-full bg-white rounded-lg">
        <p>Date: TBD</p>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={(e) => handleChange(e)} required/>
        <label htmlFor="participants">Participants:</label>
        <input type="text" id="participants" name="participants" value={formData.participants} onChange={(e) => handleChange(e)} required/>
        <label htmlFor="potentialDates">Potential Dates:</label>
        <input type="text" id="potentialDates" name="potentialDates" value={formData.potentialDates} onChange={(e) => handleChange(e)} required/>
        </div>
        <div className="flex h-20 justify-center items-center space-x-4 w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
          <button type="submit" className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={(e) => handleSubmit(e)}>Save</button>
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAppointment;

 