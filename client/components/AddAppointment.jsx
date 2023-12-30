import React from "react";

//called by: AddAppointmentContainer
const AddAppointment = ({ setIsInAddMode }) => {
  function handleClick() {
    setIsInAddMode(false);
  }
  return (
    <div className="flex flex-col h-160 w-160">
      <div className="flex flex-col grow w-full bg-white rounded-lg">
      </div>
      <div className="flex h-20 justify-center items-center w-full flex bg-[#537791] pt-4 pb-4 border-t-8 border-black">
      </div>
    </div>
  );
}

export default AddAppointment;