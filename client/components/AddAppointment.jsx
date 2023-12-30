import React from "react";
import config from '../config.js';

//called by: AddAppointmentContainer
const AddAppointment = ({ setIsInAddMode }) => {
  function handleCancel() {
    setIsInAddMode(false);
  }

  //TO DO: when save button clicked, save appointment to database and setIsInAddMode to false
  function handleSave() {

  }

  return (
    <div className="flex flex-col h-160 w-160">
      <form className="flex flex-col grow w-full bg-white rounded-lg" action="">
        <div className="flex flex-col grow w-full bg-white rounded-lg">

          

        </div>
        <div className="flex h-20 justify-center items-center space-x-4 w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
          <button className="h-12 w-36 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none" onClick={handleSave}>Save</button>
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