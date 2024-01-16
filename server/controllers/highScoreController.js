const highScoreController = {
  getUserHighScore: (req, res, next) => {
    //grab the high score of the current user from DB
    return next();
  },

  getTopScores: (req, res, next) => {
    //pull the top 5 highest scores from SQL DB and their usernames
    return next();
  },
};

export default highScoreController;
