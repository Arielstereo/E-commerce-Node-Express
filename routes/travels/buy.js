const express = require('express');
const router = express.Router();
const model = require('./../../models/users');
const { send } = require('./../../services/mail');

const buy = async(req, res) => {
    const {user} = req.session;
    
    const [emailUser] = await model.getUser(user);
    console.log(emailUser.email);
    send({
        mail: emailUser.email,
        subject: 'Tu compra ha sido realizado con exito!',
        body: `🛫 <span class="fs-4">E-flight</span>
        <h1> Bienvenido de nuevo ${emailUser.username}!</h1>
        <h2>Gracias por confiar en E-flight</h2>
        <h3>Disfruta de tu viaje! ⛱ </h3>`

    });
    res.render('travels/buy');

}


router.get('/', buy);

module.exports = router;