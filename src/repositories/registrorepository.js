const pool = require('./dbconnection')
const registrorepository = {}

registrorepository.getAll = () => {
    const context =  pool()
  return context.query('select * from registro')
}

registrorepository.create = (registro) => {
    const context =  pool()
    return context.query('insert into registro (username,correo,password) values ($1,$2,$3) RETURNING *',[registro.username,registro.correo,registro.password])
  }

  module.exports = registrorepository;