//import { userInfo } from "os"
const user = require('../models')

module.exports = {
    signup: async (req:any, res:any) => {
    const {name, password, mail, social} = req.body
    //password 암호화 필요
    await user.create({
        name: name,
        password: password,
        mail: mail,
        social: social
    })
        res.status(201).json('userInfo')
        return ;
    },

    signout: async (req:any, res:any) => {
        res.json('userInfo')
    },

    login: async (req:any, res:any) => {
        res.json('userInfo')
    },

    logout: async (req:any, res:any) => {
        res.json('userInfo')
    },

    OAuth: async (req:any, res:any) => {
        res.json('userInfo')
    },
}