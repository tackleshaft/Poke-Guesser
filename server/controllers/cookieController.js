const cookieController = {
  setCookie: (req, res, next) => {
    //do we need this actually? or just session?
    return next();
  },
};

export default cookieController;
