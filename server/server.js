const express = require('express');
const path = require('path');
const { PORT } = require('./config');
const userController = require('./controllers/users');
const appointmentController = require('./controllers/appointments');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//USER ROUTES

//creates user and responds with the created user, including id
app.post('/user', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});
//get user and respond with the user
app.get('/user/:id', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});
//update a user
app.patch('/user/:id');


//APPOINTMENT ROUTES

app.post('/appointment', appointmentController.createAppointment, userController.updateUsersAppointment, (req, res) => {
  return res.status(200).json(res.locals.appointment);
})
//get an appointment
app.get('/appointment/:id', appointmentController.getAppointment, (req, res) => {
  return res.status(200).json(res.locals.appointment);
});
//delete an appointment
app.delete('/appointment/:id');
//update an appointment
app.patch('/appointment/:id');



if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}



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