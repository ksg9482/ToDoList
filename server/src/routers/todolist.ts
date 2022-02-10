//투두리스트 생성, 투두리스트 불러오기(연단위)[처음 해당하는 년도 불려오면 저장한채 사용.]
export {}
const express = require("express")
const router = express.router()

const todolistController = require("../controllers/auth")

// 정보수정, 내정보, 내 실행현황

router.get('/', todolistController.todolist)
//가장 처음, 자동으로 보내지는 해당년월일 투두리스트
router.get('/year', todolistController.todolistYear)
//선택한 연도에 해당하는 데이터를 보냄.
router.post('/', todolistController.todolistUpdate)

router.delete('/', todolistController.todolistDelete)


module.exports = router