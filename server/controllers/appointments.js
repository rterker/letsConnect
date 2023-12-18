const { Appointment } = require('../models/models');

const appointmentController = {};

appointmentController.createAppointment =  async (req, res, next) => {
  const newAppointment = req.body;

  try {
    const createdAppointment = await Appointment.create(newAppointment);
    console.log('The following appointment was created in appointmentController.createAppointment: ', createdAppointment);
    res.locals.appointment = createdAppointment;
    return next();
  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.createAppointment: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

appointmentController.updateAppointment = async (req, res, next) => {
  //req.body should contain the id of the appointment
  const appointmentUpdate = req.body;

};

module.exports = appointmentController;
