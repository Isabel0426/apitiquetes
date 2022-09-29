const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userControll = require('../Controllers/cotroller1')
const tiquetec = require('../Controllers/Controllertiquete')
const  userRegistro =require('../Controllers/controller2')


//login
router.get(apiRoute+'/login',userControll.getlogin)

//registro
router.post(apiRoute+'/registron',userRegistro.create)

//compra tiquete
router.post(apiRoute+'/tiquete',tiquetec.create)


module.exports = router;