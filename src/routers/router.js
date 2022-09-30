const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userControll = require('../Controllers/logincontroller')
const tiquetec = require('../Controllers/Controllertiquete')
const  userRegistro =require('../Controllers/registroController')


//login
router.get(apiRoute+'/login',userControll.getAll)

//registro
router.post(apiRoute+'/registro',userRegistro.create)
router.get(apiRoute+'/registro1',userRegistro.getAll)

//compra tiquete
router.post(apiRoute+'/tiquete',tiquetec.create)


module.exports = router;