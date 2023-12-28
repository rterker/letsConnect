import dateUtil from "./dateUtil";

//takes a number for date 1 to 31
export default function getAppointmentsForDay(date, appointments) {
  return appointments.filter(appt => {
    const apptDate = new dateUtil(appt.date);
    return (apptDate.dayOfAppointment === date);
  });
}