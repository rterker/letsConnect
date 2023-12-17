const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  dbName: 'letsConnect'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const loginSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true}
});

const userSchema = new Schema({
  userName: {type: String, required: true},
  email: {type: String, required: true},
  firstName: String,
  lastName: String,
  appointments: [{type: Schema.Types.ObjectId, ref: 'appointment'}],
  createdAt: {type: Date, default: Date.now}
});

const appointmentSchema = new Schema({
  date: {type: Date, required: true},
  subject: {type: String, required: true},
  participants: {type: [String], required: true},
  status: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

const Login = mongoose.model('login', loginSchema);
const User = mongoose.model('user', userSchema);
const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = {
  Login,
  User,
  Appointment
};
