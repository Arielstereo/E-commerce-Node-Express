const verifyUser = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        res.render('login/signin', {message: 'Please login'})
    }
}

const verifyAdmin = (req, res, next) => {
    if(req.session.admin == 1){
        next();
    }
    else{
        res.render('login/signin', {message: 'Please login as admin'});
    }
}

module.exports = {verifyUser, verifyAdmin};