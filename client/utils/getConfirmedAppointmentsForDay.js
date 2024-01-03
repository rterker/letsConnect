import dateUtil from "./dateUtil";

//takes an object with day, month, year as properties
export default function getConfirmedAppointmentsForDay(dateObj, appointments) {
  return appointments.filter(appt => {
    const apptDate = new dateUtil(appt.date);
    return (apptDate.dayOfAppointment === dateObj.day && apptDate.monthOfAppointment === dateObj.month && apptDate.yearOfAppointment === dateObj.year);
  });
}