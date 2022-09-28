const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userControll = require('../Controllers/cotroller1')
const tiquetec = require('../Controllers/Controllertiquete')

//login
router.get(apiRoute+'/login',userControll.getlogin)

//registro
router.post(apiRoute+'/registro',userControll.create)

//compra tiquete
router.post(apiRoute+'/tiquete',tiquetec.create)


module.exports = router;