import React from "react";
import AddAppointment from "./AddAppointment.jsx";

//called by: BodyContainer
const AddAppointmentContainer = ({ user, setAppointments, setIsInAddMode }) => {
    return (
      <div className="mx-auto my-auto w-160 h-160 bg-[#fafafa] border border-black animate-fadeIn">
        <div className="flex min-w-full min-h-full ">
          <AddAppointment user={user} setAppointments={setAppointments} setIsInAddMode={setIsInAddMode} />
        </div>
      </div>
    );
}

export default AddAppointmentContainer;