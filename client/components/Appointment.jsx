import React from "react";

const Appointment = ({ appointment }) => {

  return (
    <li className="flex hover:bg-[#c1c0b9] active:bg-[#537791] active:text-[#f7f6e7]">
      <div className="w-full h-11 pl-4 pt-2.5 text-left overflow-hidden cursor-pointer">
        {appointment.subject}
      </div>
    </li>
  );
}

export default Appointment;