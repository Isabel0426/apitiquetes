const tiquetec = {};
const tiquete = require ('../Models/tiquete');
const repository = require('../repositories/repository');

tiquetec.create = (req, res) => {
    //capturar body request
    const nuevaCompra = req.body;
    //crear modelo tipo course
    let tiquete = new tiqueten(null,nuevaCompra.fechaEntrada,nuevaCompra.fechaSalida, nuevaCompra.numeroNinos  ,nuevaCompra.numeroAdultos, nuevaCompra.origen, nuevaCompra.vuelta)
    //llamar metodo del repository y enviamos objeto modelo
    repository.create(tiquete)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si inserto correctamente
            tiquete.id = resp.rows[0].id
            res.status(201).send(tiquete);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}