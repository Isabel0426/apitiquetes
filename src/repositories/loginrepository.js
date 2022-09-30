const pool = require('./dbconnection')
const loginrepository = {}

loginrepository.getAll = (login) => {
    const context = pool()
    return context.query('select * from login where username=$1 and password=$2', [login.username, login.password])
}
loginrepository.update = (login) => {
    const context =  pool()
    return context.query('update login SET password = $2 where username=$1',[login.username,login.password])
  }
module.exports = loginrepository