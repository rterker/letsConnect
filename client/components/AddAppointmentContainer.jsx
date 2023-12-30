import React from "react";

//called by: BodyContainer
const AddAppointmentContainer = ({ setIsInAddMode }) => {
  function handleClick() {
    setIsInAddMode(false);
  }

    return (
      <div className="flex mx-auto my-auto w-160 h-160 bg-black" onClick={handleClick}></div>
    );
}

export default AddAppointmentContainer;