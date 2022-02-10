export {} ;
const express = require("express")
const router = express.router()

const userController = require("../controllers/users")

// 정보수정, 내정보, 내 실행현황

router.get('/', userController.userInfo)
router.patch('/', userController.userPatch)
//post? patch? 어떤걸로? 유저구분은 어떻게?
router.delete('/', userController.userDelete)

module.exports = router