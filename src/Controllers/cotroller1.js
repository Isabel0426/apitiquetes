const userControll = {};
const login = require('../Models/login');
const repository = require('../repositories/repository')


userControll.getlogin = (req, res) => {
    const user = req.body.username
    const pass = req.body.contraseña
    repository.getlogin(user, pass)
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

userControll.create = (req, res) => {
    //capturar body request
    const newUser= req.body;
    let users = new login(null,newUser.username,newUser.correo, newUser.contraseña)
    //llamar metodo del repository y enviamos objeto modelo
    repository.create(users)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si insert ok
            users.Id = resp.rows[0].id
            res.status(201).send(users);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}


module.exports = userControll