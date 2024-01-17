const express = require('express');
const path = require('path');
const PORT = 3000;
// const cors = require('cors')
const app = express();

const highScoreController = require('./controllers/highScoreController')
const userController = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../build')));
// app.use(cors()) 



//Route to pull top 5 highscores
// app.get('/api/gethighscores', highScoreController.getTopScores, (req, res) => 
//  res.status(200).send(res.locals.topScores)
// )

//validate user login and send back app state
app.post('/api/checkuser', userController.checkUser, (req, res) => {
  console.log('this is email', req.body.email);
  return res.status(200).send(res.locals.userInfo)});


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

//uncomment for testing:
// export default app;
