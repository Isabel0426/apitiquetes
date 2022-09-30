const tiquetec = {};
const tiqueten = require ('../Models/tiquete');
const repository = require('../repositories/comprarepository');


tiquetec.getAll = (req, res) => {
     const compra = req.body.comprador
    repository.getAll(compra)
        .then((tiquetes) => {
            //si devuelve mas de un registro
            if (tiquetes.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            console.log(tiquetes.rows)
            res.status(200).send(tiquetes.rows);
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}

tiquetec.create = (req, res) => {
    //capturar body request
    const nuevaCompra = req.body;
    //crear modelo tipo course
    let tiquete = new tiqueten(nuevaCompra.fechaEntrada,nuevaCompra.fechaSalida, nuevaCompra.numeroNinos ,nuevaCompra.numeroAdultos, nuevaCompra.origen, nuevaCompra.vuelta,nuevaCompra.comprador)
    //llamar metodo del repository y enviamos objeto modelo
    repository.create(tiquete)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si inserto correctamente
            tiquete.comprador = resp.rows[0].comprador
            res.status(201).send(tiquete);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
module.exports = tiquetec