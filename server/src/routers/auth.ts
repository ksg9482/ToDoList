//회원가입, 로그인, 소셜로그인
export {} ;
const express = require("express")
const router = express.router()

const authController = require("../controllers/auth")

// 정보수정, 내정보, 내 실행현황

router.get('/',authController)


module.exports = router