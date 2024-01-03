import dateUtil from "./dateUtil";

export default function getPendingAppointmentsForDay(userId, activeDay, appointments) {
  const { day, month, year } = activeDay;

  return appointments.filter(appointment => {
    const potentialDatesObject = appointment.potentialDates.filter(potentialDateObject => potentialDateObject.userId === userId)[0];
    for (let i = 0; i < potentialDatesObject.availabilities.length; i++) {
      const availabilityDate = new dateUtil(potentialDatesObject.availabilities[i]);
      if (availabilityDate.dayOfAppointment === day && availabilityDate.monthOfAppointment === month && availabilityDate.yearOfAppointment === year) return true;
    }
  });
} 


