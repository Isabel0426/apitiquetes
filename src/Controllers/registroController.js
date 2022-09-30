const userRegistro = {};
const registro = require('../Models/registro');
const repositoryregistro = require('../repositories/registrorepository');

userRegistro.getAll = (req, res) => {
    const usern = req.body.username
    const pass = req.body.password
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
    const newregistro1= req.body;
    let registro1 = new registro(null,newregistro1.username,newregistro1.correo, newregistro1.password)
    console.log(registro1)
    //llamar metodo del repository y enviamos objeto modelo
    repositoryregistro.create(registro1)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si insert ok
            repositoryregistro.username = resp.rows[0].username
            res.status(201).send(registro1);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
module.exports = userRegistro
