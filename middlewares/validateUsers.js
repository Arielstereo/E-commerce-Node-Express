const { schemas } = require('./schemas/users');

const validateSignin = (req, res, next) => {
    const {error,value} = schemas.signin.validate(req.body);
    error ? res.render('login/signin', {message: error.details[0].message}) : next();    
}

const validateSignup = (req, res, next) => {
    const {error,value} = schemas.signup.validate(req.body);
    error ? res.render('login/signup', {message: error.details[0].message}) : next();
}

module.exports = { validateSignin, validateSignup };