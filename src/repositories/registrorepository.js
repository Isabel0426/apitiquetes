const pool = require('./dbconnection')
const registrorepository = {}

registrorepository.getAll = () => {
    const context =  pool()
  return context.query('select * from registro')
}

registrorepository.create = (registro) => {
    const context =  pool()
    return context.query('insert into registro (username,correo,contraseña) values ($1,$2,$3) RETURNING id',[registro.username,registro.correo,registro.contraseña])
  }

  module.exports = registrorepository;