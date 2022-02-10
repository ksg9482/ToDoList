//회원가입, 로그인, 소셜로그인
export {} ;
const express = require("express")
const router = express.router()

const authController = require("../controllers/auth")

// 정보수정, 내정보, 내 실행현황

router.post('/signup',authController.signup)
router.post('/signout',authController.signout)
//회원탈퇴는 데이터 뭐 보내는지? 확인용 비밀번호랑 함께? 
router.post('/login',authController.login)
router.get('/logout',authController.logout)
//로그아웃은 데이터 안보내니 get으로 해도 되지 않나? 
router.post('/oauth',authController.OAuth)


module.exports = router