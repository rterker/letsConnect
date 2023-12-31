import React, { useEffect, useState } from "react";
import adaptValidatePost from '../utils/adaptValidatePost.js';

//called by: AddAppointmentContainer
const AddAppointment = ({ user, setIsInAddMode }) => {
  const [formData, setFormData] = useState({date: '', subject: '', participants: '', status: 'pending', creator: user.email});
  //TO DO: add some state to update with the response after successful post of new appointment

  function handleCancel() {
    setIsInAddMode(false);
  }

  //TO DO: when save button clicked, adapt and validate data, save appointment to database, and setIsInAddMode to false
  function handleSubmit(e) {
    e.preventDefault();
    adaptValidatePost(formData, user, setIsInAddMode);
  }

  function handleChange(e) {
    //TO DO: need to handle adding participants
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  }

  //input values for forms are type string
  return (
    <div className="flex flex-col h-160 w-160">
      <form className="flex flex-col grow w-full bg-white rounded-lg" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col grow w-full bg-white rounded-lg">
        <label htmlFor="date">Date:</label>
        <input type="text" id="date" name="date" value={formData.date} onChange={(e) => handleChange(e)}/>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={(e) => handleChange(e)}/>
        <label htmlFor="participants">Participants:</label>
        <input type="text" id="participants" name="participants" value={formData.participants} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="flex h-20 justify-center items-center space-x-4 w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={(e) => handleSubmit(e)}>Save</button>
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAppointment;