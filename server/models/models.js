const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  dbName: 'letsConnect'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const loginSchema = new Schema({
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const userSchema = new Schema({
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  firstName: String,
  lastName: String,
  appointments: [{type: Schema.Types.ObjectId, ref: 'appointment'}],
  createdAt: {type: Date, default: Date.now}
});

const potentialDateSchema = new Schema({
  userName: String,
  availabilities: {type: [Date], required: true}
});

const appointmentSchema = new Schema({
  date: Date,
  subject: {type: String, required: true},
  participants: {type: [String], required: true},
  potentialDates: [potentialDateSchema],
  status: {type: String, required: true},
  creator: {type: String, required: true},
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
