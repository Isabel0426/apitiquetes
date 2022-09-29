const pool = require('./dbconnection')
const loginrepository = {}

loginrepository.getAll = (login) => {
    const context = pool()
    return context.query('select * from login where username=$1 and contraseña=$2', [login.username, login.contraseña])
}
loginrepository.update = (login) => {
    const context =  pool()
    return context.query('update login SET contraseña = $2 where username=$1',[login.username,login.contraseña])
  }
module.exports = loginrepository