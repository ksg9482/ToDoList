require('dotenv').config()
import jwt from 'jsonwebtoken'
const DOMAIN = process.env.DOMAIN || 'localhost'
const ACCESSTOKEN = process.env.ACCESS_SECRET || 'todolist_access'

module.exports = {
    generateAccessToken: (data: any) => {
        return jwt.sign(data, ACCESSTOKEN, { expiresIn: '30m' })
    },
    sendAccessToken: (res: any, token: any, userData: any) => {
        res.status(200)
            .cookie('jwt',token,{
                sameSite: 'none',
                domain: DOMAIN,
                path: '/',
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 48)
            })
            .json({data: userData})
        return;
    },
    isAuthorized: (req:any) => {
        const authorization = req.headers['authorization']
        if(!authorization){
            return console.log('authorization오류')
        }
        const token = authorization.split(' ')[1]
        try {
            return jwt.verify(token, ACCESSTOKEN)
        } catch (error) {
            return console.log(error)
        }
    },
    refreshToken: () => { }
}