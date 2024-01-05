import dateUtil from "./dateUtil";

//called by: CalendarContainer
export default function getPendingAppointmentsForDay(userName, activeDay, appointments) {
  const { day, month, year } = activeDay;

  return appointments.filter(appointment => {
    const potentialDatesObject = appointment.potentialDates.filter(potentialDateObject => potentialDateObject.userName === userName)[0];
    if (potentialDatesObject) {
      for (let i = 0; i < potentialDatesObject.availabilities.length; i++) {
        const availabilityDate = new dateUtil(potentialDatesObject.availabilities[i]);
        if (availabilityDate.dayOfAppointment === day && availabilityDate.monthOfAppointment === month && availabilityDate.yearOfAppointment === year) return true;
      }
    } else {
      return false;
    }
  });
} 