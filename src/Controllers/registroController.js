const userRegistro = {};
const registro = require('../Models/registro');
const repositoryregistro = require('../repositories/registrorepository');




userRegistro.getAll = (req, res) => {
    const usern = req.body.username
    const pass = req.body.contraseña
    const mail = req.body.correo
    //logica para listar todos los cursos
    repositoryregistro.getAll(usern,mail,pass)
        .then((registros) => {
            //si devuelve mas de un registro
            if (registros.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            res.json(registros
                .rows);
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}



userRegistro.create = (req, res) => {
    //capturar body request
    const newregistro= req.body;
    let registro = new registro(null,newregistro.username,newregistro.correo, newregistro.contraseña)
    //llamar metodo del repository y enviamos objeto modelo
    repositoryregistro.create(registro)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si insert ok
            repositoryregistro.username = resp.rows[0].username
            res.status(201).send(registro);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
module.exports = userRegistro
