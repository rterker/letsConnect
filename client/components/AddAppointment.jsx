import React, { useState } from "react";
import config from '../config.js';

//called by: AddAppointmentContainer
const AddAppointment = ({ user, setIsInAddMode }) => {
  const [formData, setFormData] = useState({date: '', subject: '', participants: [user.email], status: 'pending', creator: user.email});

  function handleCancel() {
    setIsInAddMode(false);
  }

  //TO DO: when save button clicked, save appointment to database and setIsInAddMode to false
  function handleSave(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col h-160 w-160">
      <form className="flex flex-col grow w-full bg-white rounded-lg" action={`${config.DEV_BASE_URL}/appointment`}>
        <div className="flex flex-col grow w-full bg-white rounded-lg">

          

        </div>
        <div className="flex h-20 justify-center items-center space-x-4 w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={(e) => handleSave(e)}>Save</button>
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAppointment;


<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>

// date: {type: Date, required: true},
// subject: {type: String, required: true},
// participants: {type: [String], required: true},
// status: {type: String, required: true},
// creator: {type: String, required: true},