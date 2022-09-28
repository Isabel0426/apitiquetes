const userRegistro = {};
const registron = require('../Models/registro');
const repository = require('../repositories/repository');

userRegistro.create = (req, res) => {
    //capturar body request
    const newUser= req.body;
    let registro = new registron(null,newUser.username,newUser.correo, newUser.contraseña)
    //llamar metodo del repository y enviamos objeto modelo
    repository.create(registro)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si insert ok
            registro.username = resp.rows[0].username
            res.status(201).send(registro);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
module.exports = userRegistro
