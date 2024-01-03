
export default function getPendingAppointmentsForDay(userId, appointments) {
  return userPotentialAppointments = appointments.potentialDates.filter(potentialDatePerUser => {
    return potentialDatePerUser.userId === userId;
  });
}

