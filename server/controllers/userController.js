const userController = {
    checkUser: (req, res, next) => {
        const { email } = req.body.email;
        //Query the database to see if user exists
        const CHECK_USER_EXISTS = ''

        const userExistence = db.query(CHECK_USER_EXISTS)

        //check if userExistence contains certain values, true/false 
    }

};

export default userControllerController;
