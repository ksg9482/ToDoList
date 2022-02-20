//import { userInfo } from "os"
const user = require('../database/models')

module.exports = {
    signup: async (req: any, res: any) => {
        const { name, password, mail, social } = req.body
        //password 암호화 필요
        try {
            await user.create({
                name: name,
                password: password,
                mail: mail,
                social: social
            })
            return res.status(201).json('userInfo')

        } catch (error) {
            return res.status(500).json({'message': 'server error'})
        }
        
    },

    signout: async (req: any, res: any) => {
        try {
            await user.destroy({
                where: {id: req.userId}
            })
            return res.status(200).clearCookie('jwt').json({"message" : 'deleted'})  
        } catch (error) {
            return res.status(500).json({'message': 'server error'})
        }
        res.json('userInfo')
    },

    login: async (req: any, res: any) => {
        res.json('userInfo')
    },

    logout: async (req: any, res: any) => {
        res.json('userInfo')
    },

    OAuth: async (req: any, res: any) => {
        res.json('userInfo')
    },
}