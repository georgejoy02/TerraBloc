const express = require('express')
const router = express.Router()

const checkOwner = require("../controller/contractOwnerLogin")
const addLinsp = require("../controller/addLandInspector")
const allLiList = require("../controller/allLiList")
const userReg = require("../controller/userreg")

router.route('/checkowner').post(checkOwner)
router.route('/addli').post(addLinsp)
router.route('/addlilist').get(allLiList)
router.route('/userreg').post(userReg)




module.exports = router;