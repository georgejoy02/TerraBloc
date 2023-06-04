const express = require('express')
const router = express.Router()
const fileLocalSave = require("../middleware/fileLocalSave")
const upload = fileLocalSave();


const allUserList = require("../controller/allUserList")
const checkOwner = require("../controller/contractOwnerLogin")
const addLinsp = require("../controller/addLandInspector")
const allLiList = require("../controller/allLiList")
const userReg = require("../controller/userreg")
const userVerify = require("../controller/userVerify")

router.route('/checkowner').post(checkOwner)
router.route('/addli').post(addLinsp)
router.route('/alllilist').get(allLiList)
router.route('/userreg').post(upload.single('file'), userReg)
router.route('/alluserlist').get(allUserList)
router.route('/verifyuser').post(userVerify)


module.exports = router;