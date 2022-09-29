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



// repository.get = (username, contraseña) => {
//   const context =  pool()
//   return context.query('select * from login where username=$1 and contraseña=$2',[username,contraseña])
// }
// //de registro para crear uno new
// repository.create = (registro) => {
//   const context =  pool()
//   return context.query('insert into registro (username,correo,contraseña) values ($1,$2,$3) RETURNING id',[registro.username,registro.correo, registro.contraseña])
// }
// repository.create = (tiquete) => {
//   const context =  pool()
//   return context.query('insert into tiquete (id,fechaEntrada,fechaSalida,numeroNinos,numeroAdultos,origen,vuelta) values ($1,$2,$3,$4,$5,$6,$7) RETURNING id',[tiquete.id,tiquete.fechaEntrada, tiquete.fechaSalida, tiquete.numeroNinos, tiquete.numeroAdultos, tiquete.origen, tiquete.vuelta])
// }



// module.exports = repository;