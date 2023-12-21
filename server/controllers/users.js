const { User } = require('../models/models');

const userController = {};

userController.createUser = async (req, res, next) => {
  const newUser = req.body;

  try {
    //handles array of new user objects or a single user object
    const createdUser = await User.create(newUser);
    console.log('The following users were created in userController.createUsers: ', createdUser);
    res.locals.user = createdUser;
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
    //do i need to check for null?
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
      log: `The following middleware error occured in userController.updateUsersAppointment: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

userController.getUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    //get user
    //error thrown if the userId is not a valid ObjectId format, e.g. not enough characters long
    const user = await User.findOne({_id: userId});
    //handle null
    // if (!user) redirect to login page
    res.locals.user = user;
    return next();

  } catch (err) {
    return next({
      log: `The following middleware error occured in userController.getUser: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

userController.updateUsers = async (req, res, next) => {

};

userController.deleteUsers = async (req, res, next) => {

};



module.exports = userController;