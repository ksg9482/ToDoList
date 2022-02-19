require('dotenv').config()
const { sign } = require('jsonwebtoken')
const DOMAIN = process.env.DOMAIN || 'localhost'

module.exports = {
    generateAccessToken: (data:any) => {
        return sign(data, process.env.ACCESS_SECRET, {expireIn:'30m'})
    },
    sendAccessToken: () => {},
    isAuthorized: () => {},
    refreshToken: () => {}
}