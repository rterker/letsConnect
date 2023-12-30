import React from "react";

//called by: BodyContainer
const AddAppointmentButton = ({ isInAddMode, setIsInAddMode }) => {
  function handleClick() {
    if (!isInAddMode) setIsInAddMode(true);
  }

  return (
    <div className="relative w-12 h-12 bg-[#c1c0b9] text-xl rounded-lg shadow-lg hover:shadow-xl active:shadow-inner focus:outline-none cursor-pointer" onClick={handleClick}>
      <div className="absolute top-2 left-1/2 w-1 h-8 bg-[#fafafa] -translate-x-2/4 shadow-inner"></div>
      <div className="absolute left-2 top-1/2 h-1 w-8 bg-[#fafafa] -translate-y-2/4 shadow-inner"></div>
    </div>
  );

}

export default AddAppointmentButton;
