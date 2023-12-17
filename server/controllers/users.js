const { User } = require('../models/models');

const userController = {};

userController.createUser = async (req, res, next) => {
  const newUser = req.body;

  try {
    const createdUser = await User.create(newUser);
    res.locals.createdUser = createdUser;
    return next();
  } catch (err) {
    return next({
      log: `The following middleware error occured in userController.createUser: ${err}`,
      status: 500,
      message: {err: err}
    });
  }
};

module.exports = userController;