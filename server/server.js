const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();

const googleAuthController = require('./controllers/googleAuthController');
const highScoreController = require('./controllers/highScoreController');
const sessionController = require('./controllers/sessionController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));

//app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/pages/Login.jsx'));
});

//serve 404 error to all other unknown routes
app.use('*', (req, res) => res.status(404).send('Page not found'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middlware error, uh-oh!',
    status: 500,
    message: { err: 'An error occured' },
  };
  //use default err mashed with changes from passed in err
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
