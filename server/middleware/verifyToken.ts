const { user } = require('../database/models')
import jwt from 'jsonwebtoken'
require('dotenv').config()
//기한이 지난 경우, 올바르지 않은 경우

const isAuth = (req:any, res:any, next:any) => {
    const token = req.cookies['jwt']
    if(!token){
        return res.status(401).json({'message': "token doesn't exist"})
    }
    try {
        jwt.verify(token, process.env.ACCESS_SECRET, async(err:any, decoded:any) => {
            if(err){
                return res.status(401).json({ "message": "token doesn't exist"})
            } 
            //데이터베이스에 물어야 하기 때문에 내용이 있어야 함
            const userInfo = await user.findOne({where: {id: decoded.userId}})
            if(!userInfo){
                return res.status(401).json({'message': "token doesn't exist"})
            }
            //이러면 req.userId가 전역으로 바뀌는가? next안에 넣으면 안되나?
            req.userId = decoded.userId
            return next()
        })
    } catch (error) {
        return res.status(500).json({'message': "server error"})
    }
}

