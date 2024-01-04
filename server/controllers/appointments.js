const { Appointment } = require('../models/models');

const appointmentController = {};

appointmentController.createAppointment =  async (req, res, next) => {
  const newAppointment = req.body;
  console.log('newAppointment in appointmentController.createAppointment:', newAppointment)
  
  try {
    const createdAppointment = await Appointment.create(newAppointment);
    console.log('The following appointment was created in appointmentController.createAppointment: ', createdAppointment);
    res.locals.createdAppointment = createdAppointment;
    return next();

  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.createAppointment: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

appointmentController.getAppointment = async (req, res, next) => {
  const { appointmentId } = req.params;

  try {
    //get appointment
    //error thrown if the appointmentId is not a valid ObjectId format, e.g. not enough characters long
    const appointment = await Appointment.findOne({_id: appointmentId});
    //handle null
    // if (!appointment) redirect to login page
    res.locals.appointment = appointment;
    return next();

  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.getAppointment: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
}

appointmentController.getUserListOfAppointments = async (req, res, next) => {
  const { userAppointmentIds } = res.locals;
  const userAppointments = [];

  try {
    for (let i = 0; i < userAppointmentIds.length; i++) {
      const appointment = await Appointment.findOne({_id: userAppointmentIds[i]});
      if (appointment) userAppointments.push(appointment);
    }
    res.locals.userAppointments = userAppointments;
    return next();

  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.getUserAppointments: ${err}`,
      status: 500,
      message: {err: err}
    });
  }


}

appointmentController.updateAppointmentWithoutChangingStatus = async (req, res, next) => {
  //req.body will contain the appointment object with shape: { date, subject, [participants], status, creator, _id, createdAt, __v }
  const appointmentUpdate = req.body;
  console.log('appointmentUpdate in appointmentController.updateAppointment before update:', appointmentUpdate)

  const { date, subject, participants, potentialDates, status, _id: appointmentId } = appointmentUpdate;

  let update;
  if (!date) update = { $set: {subject, participants, potentialDates}};
  else update = { $set: {date, subject, participants, potentialDates}};

  try {
    const updatedAppointment = await Appointment.findOneAndUpdate({_id: appointmentId}, update, {new: true});
    console.log('updatedAppointment in appointmentController.updateAppointment after update:', updatedAppointment)
    res.locals.updatedAppointment = updatedAppointment;
    next();

  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.updateAppointmentWithoutChangingStatus: ${err}`,
      status: 500,
      message: {err: err}
    });
  }

};

module.exports = appointmentController;
