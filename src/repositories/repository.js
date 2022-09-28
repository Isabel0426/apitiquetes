//servicios
const pool = require('./dbconnection')
const repository = {}
//de logueo
repository.getlogin = (username, contraseña) => {
  const context =  pool()
  return context.query('select * from login where username=$1 and contraseña=$2',[username,contraseña])
}
//de registro para crear uno new
repository.create = (registro) => {
  const context =  pool()
  return context.query('insert into registro (username,correo,contraseña) values ($1,$2,$3) RETURNING id',[registro.username,registro.correo, registro.contraseña])
}

module.exports = repository;
