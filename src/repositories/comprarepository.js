//servicios
const pool = require('./dbconnection')
const comprarepository = {}
// //de compra
comprarepository.getAll = () =>{
    const context = pool()
    return context.query(' select * from tiquete')
}
comprarepository.create = (tiquete) =>{
const context =  pool()
  return context.query('insert into tiquete (fechaEntrada,fechaSalida,numeroNinos,numeroAdultos,origen,vuelta,comprador) values ($1,$2,$3,$4,$5,$6,$7)  RETURNING *',[tiquete.fechaEntrada, tiquete.fechaSalida, tiquete.numeroNinos, tiquete.numeroAdultos, tiquete.origen, tiquete.vuelta,tiquete.comprador] )
}
comprarepository.update = (tiquete) => {
    const context =  pool()
    return context.query('update tiquete SET fechaEntrada = $2, fechaSalida=$3 where *',[tiquete.fechaEntrada,tiquete.fechaSalida])
  }
  
  module.exports = comprarepository;
