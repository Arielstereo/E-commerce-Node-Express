const verifyUser = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        res.render('login/signin', {message: '* Inicie sesión por favor!'})
    }
}

const verifyAdmin = (req, res, next) => {
    if(req.session.admin == 1){
        next();
    }
    else{
        res.render('login/signin', {message: '* Inicie sesión como administrador'});
    }
}

module.exports = {verifyUser, verifyAdmin};