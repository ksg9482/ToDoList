export {} ;
const express = require("express")
const router = express.router()

const userController = require("../controllers/users")

// 정보수정, 내정보, 내 실행현황

router.get('/',userController.userInfo)


module.exports = router