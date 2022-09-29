const userControll = {};
const login = require('../Models/login');
const repository = require('../repositories/repository');


userControll.get = (req, res) => {
    const user = req.body.username
    const pass = req.body.contraseña
    repository.login(user, pass)
        .then((users) => {
            //si devuelve mas de un registro
            if (users.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            res.status(200).send('usuario encontrado');
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}

module.exports = userControll