const express = require('express');
const { PORT } = require('./config');
const userController = require('./controllers/users');
const appointmentController = require('./controllers/appointments');


const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));


//routes
//use '/' as a test route for now
app.post('/user', userController.createUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

app.post('/appointment', appointmentController.createAppointment, userController.updateUsersAppointment, (req, res) => {
  return res.status(200).json(res.locals.appointment);
})








app.use((req, res) => res.status(404).send('Page not found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler activated',
    status: 500,
    message: {err: 'An error occured'}
  }

  const error = Object.assign(defaultErr, err);
  console.log(error.log);
  return res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));