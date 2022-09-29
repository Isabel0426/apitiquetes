//servicios
const pool = require('./dbconnection')
const comprarepository = {}
// //de compra
comprarepository.getAll = () =>{
    const context = pool()
    return context.query(' select * from tiquete')
}
comprarepository.getById = (id) => {
    const context = pool()
    return context.query('select * from tiquete where id=$1', [id]) 
}
comprarepository.create = (tiquete) =>{
const context =  pool()
  return context.query('insert into tiquete (id,fechaEntrada,fechaSalida,numeroNinos,numeroAdultos,origen,vuelta) values ($1,$2,$3,$4,$5,$6,$7)  RETURNING id',[tiquete.id,tiquete.fechaEntrada, tiquete.fechaSalida, tiquete.numeroNinos, tiquete.numeroAdultos, tiquete.origen, tiquete.vuelta] )
}
comprarepository.update = (tiquete) => {
    const context =  pool()
    return context.query('update tiquete SET fechaEntrada = $2, fechaSalida=$3 where id=$1',[tiquete.Id,tiquete.fechaEntrada,tiquete.fechaSalida])
  }
  
  comprarepository.delete = (id) => {
    const context =  pool()
    return context.query('delete from tiquete where id=$1',[id])
  }
  module.exports = comprarepository;
