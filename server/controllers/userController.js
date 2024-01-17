const {User, HighScore} = require('../../databases/pgModel')


const userController = {
    checkUser: async (req, res, next) => {
        try {
        console.log('req.body: ', req.body)
        const { email } = req.body;
        console.log('email:', email)
        //Query the database to see if user exists
        const userExistence = await User.findOne({
            where: {
              username: email
            }
          });

        console.log('userExistence: ', userExistence)

        //If not, add new user to the database
        if (!userExistence) {
            newUser = await User.create({
                username: email,
                userHighScore: 0,
                password: 'password'
                });
            console.log('this is newUser in CheckUser: ', newUser) 
        } 

        //Whether new or existing user, pull their highscore
        const userHighScore =  await User.findOne({
            attributes: ['userHighScore'],
            where: {
                username: email,
            }
        });
        console.log('this is userHighScore', userHighScore)
        // `SELECT UserHighScore FROM UserTable WHERE UserId = ${email};`
        res.locals.userInfo = {signedIn: true, username: email, userHighScore: userHighScore.userHighScore};
        return next();
    } catch (error) {
        console.error('Error in checkUser:', error);
        return res.status(500).send('Internal Server Error');
    }
    }

};

module.exports = userController;
