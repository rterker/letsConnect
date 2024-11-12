import dateUtil from "./dateUtil";

export default function getConfirmedAppointmentsForMonth(date, appointments) {
  const dateObj = new dateUtil(date);
  return appointments.filter(appt => {
    if (appt.date) {
      const apptDate = new dateUtil(appt.date);
      return (apptDate.yearOfAppointment === dateObj.yearOfAppointment) && (apptDate.monthOfAppointment === dateObj.monthOfAppointment);
    } else {
      return false;
    }
  });
}