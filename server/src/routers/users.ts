const express = require("express")
const router = express.router()

const userController = require("../controllers/users")

router.get('/',userController.userInfo)


module.exports = router