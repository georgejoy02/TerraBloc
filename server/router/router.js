const express = require('express')
const router = express.Router()
const fileLocalSave = require("../utils/fileLocalSave")
const upload = fileLocalSave();


const checkOwner = require("../controller/contractOwnerLogin")
const addLinsp = require("../controller/addLandInspector")
const allLiList = require("../controller/allLiList")
const userReg = require("../controller/userreg")

router.route('/checkowner').post(checkOwner)
router.route('/addli').post(addLinsp)
router.route('/addlilist').get(allLiList)
router.route('/userreg').post(upload.single('file'), userReg)




module.exports = router;