import React from "react";
import AddAppointment from "./AddAppointment.jsx";

//called by: BodyContainer
const AddAppointmentContainer = ({ user, setIsInAddMode }) => {
    return (
      <div className="mx-auto my-auto w-160 h-160 bg-[#fafafa] rounded-lg">
        <div className="flex min-w-full min-h-full border-8 border-black bg-black rounded-lg">
          <AddAppointment user={user} setIsInAddMode={setIsInAddMode} />
        </div>
      </div>
    );
}

export default AddAppointmentContainer;