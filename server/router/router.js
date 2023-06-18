const express = require('express')
const router = express.Router()
const fileLocalSave = require("../middleware/fileLocalSave")
const upload = fileLocalSave();


const allUserList = require("../controller/allUserList")
const checkOwner = require("../controller/contractOwnerLogin")
const addLinsp = require("../controller/addLandInspector")
const allLiList = require("../controller/allLiList")
const fileUpload = require("../controller/fileupload")
const userVerify = require("../controller/userVerify");
const userLogin = require('../controller/userLogin');
const getUserData = require('../controller/getUserData');
const adminLogin = require('../controller/adminLogin');
const ownerLogin = require('../controller/ownerLogin');
const isLandReg = require('../controller/isLandReg');

router.route('/checkowner').post(checkOwner)
router.route('/addli').post(addLinsp)
router.route('/alllilist').get(allLiList)
router.route('/fileupload').post(upload.single('file'), fileUpload)
router.route('/alluserlist').get(allUserList)
router.route('/userlogin').post(userLogin)
router.route('/verifyuser').post(userVerify)
router.route('/getuserdata').post(getUserData)
router.route('/adminlogin').post(adminLogin)
router.route('/ownerlogin').post(ownerLogin)
router.route('/islandreg').post(isLandReg)


module.exports = router;