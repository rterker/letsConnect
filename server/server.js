const express = require('express');
const { PORT } = require('./config');
const userController = require('./controllers/users');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));


//routes
//use '/' as a test route for now
app.get('/', userController.createUser, (req, res) => {
  return res.sendStatus(200).json();
});








app.use((req, res) => res.status(404).send('Page not found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler activated for unknown reasons',
    status: 500,
    message: {err: 'An error occured'}
  }
  const error = { ...defaultErr, err};
  console.log(error.log);
  return res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));