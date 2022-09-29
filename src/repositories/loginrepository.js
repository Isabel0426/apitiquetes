const login = require('../Models/login')
const pool = require('./dbconnection')
const loginrepository = {}

loginrepository.getAll = (login) => {
    const context = pool()
    return context.query('select * from login where username=$1 and contraseña=$2', [login.username, login.contraseña])
}
module.exports = loginrepository