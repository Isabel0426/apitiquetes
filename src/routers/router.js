const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const userControll = require('../Controllers/cotroller1')

//login
router.post(apiRoute+'/login',userControll.getlogin)

//registro
router.post(apiRoute+'/registro',userControll.create)

module.exports = router;