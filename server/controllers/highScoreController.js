const { User, HighScore } = require('../../databases/pgModel');

const highScoreController = {
  getPersonalBest: async (req, res, next) => {
    //grab the high score of the current user from DB
    try {
      const { username } = req.body;
      const personalBest = await HighScore.findOne({
        where: { userId: username },
        order: [['score', 'DESC']],
      });
      console.log('personal best:', personalBest);
      res.locals.personalBest = { personalBest };
      return next();
    } catch (error) {
      console.error('Error in getPersonalBest:', error);
      return res.status(500).send('Internal Server Error');
    }
  },
  getScoreboard: async (req, res, next) => {
    //pull the top 5 highest scores from SQL DB and their usernames
    try {
      const topScores = await HighScore.findAll({
        attributes: ['score', 'userId'],
        order: [['score', 'DESC']],
        limit: 5,
      });
      console.log('top scores:', topScores);
      res.locals.scoreboard = { topScores };
      return next();
    } catch (error) {
      console.error('Error in getScoreboard:', error);
      return res.status(500).send('Internal Server Error');
    }
  },
  addScore: async (req, res, next) => {
    try {
      const { username, score } = req.body;

      let highScore = await HighScore.create({
        userId: username,
        score: score,
      });
      return next();
    } catch (error) {
      console.error('Error in addScore:', error);
      return res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = highScoreController;
