require('dotenv').config()
const {sign} = require('jsonwebtoken')
const DOMAIN = process.env.DOMAIN || 'localhost'