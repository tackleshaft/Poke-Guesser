const db = require('../../databases/pgModel')

const userController = {
    checkUser: (req, res, next) => {
        const { email } = req.body.email;
        //Query the database to see if user exists
        const CHECK_USER_EXISTS = `SELECT 1 FROM USER_TABLE WHERE Username = ${email};`
        const userExistence = db.query(CHECK_USER_EXISTS)
        if (!userExistence) {
            ADD_USER = `INSERT INTO USER_TABLE (Username, UserHighScore) VALUES (${email}, 0);`
            const newUser = db.query(ADD_USER);
            //check if newUser worked
        } 

        PULL_USER_HIGHSCORE = `SELECT UserHighScore FROM UserTable WHERE UserID = ${email};`
        const userHighScore = db.query(PULL_USER_HIGHSCORE);
        res.locals.userInfo = {signedIn: true, username: email, userHighScore: userHighScore};
        
        return next();
    }

};

export default userControllerController;
