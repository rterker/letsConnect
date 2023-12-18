const { User } = require('../models/models');

const userController = {};

userController.createUsers = async (req, res, next) => {
  const newUsers = req.body;

  try {
    //handles array of new user objects or a single user object
    const createdUsers = await User.create(newUsers);
    console.log('The following users were created in userController.createUsers: ', createdUsers);
    res.locals.users = createdUsers;
    return next();
  } catch (err) {
    return next({
      log: `The following middleware error occured in userController.createUser: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

//NEED TO TEST MORE
userController.updateUsersAppointment = async (req, res, next) => {
  //once appointment is created or updated, need to push appointment to users. 
  const { _id: appointmentId, participants } = res.locals.appointment;

  try {
    //need to test this when passing in array of participants
    const updateMessage = await User.updateMany({userName: {$in: participants}}, {$push: {appointments: appointmentId}}, {new: true, upsert: false});
    //need to test this when passing in array of participants
    if (updateMessage.modifiedCount !== participants.length) throw new Error('Number of modified user documents did not equal number of passed in users');
    if (updateMessage.modifiedCount === 1) {
      console.log(`${updateMessage.modifiedCount} user document was updated: ${participants}`);
    } else {
      //need to test this when passing in array of partipcants
      console.log(`${updateMessage.modifiedCount} user documents were updated: ${participants}`);
    }
    return next();
  } catch (err) {
    return next({
      log: `The following middleware error occured in appointmentController.pushToUserAppointments: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

userController.getUsers = async (req, res, next) => {

};

userController.updateUsers = async (req, res, next) => {

};

userController.deleteUsers = async (req, res, next) => {

};



module.exports = userController;