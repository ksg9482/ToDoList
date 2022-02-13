import express = require('express')
import cors = require('cors')
const userRouter = require('./routers/user')
const authRouter = require('./routers/auth')
const todolistRouter = require('./routers/todolist')



function runServer(){
    const app = express()
    const PORT = 8080
    
    app.get('/',(req, res)=>{
        res.end('success')
    })

    app.use(cors({
        origin:['http://localhost:3000'],
        credentials:true,
        methods:['GET', 'POST', 'PATCH', 'DELETE' ,'OPTIONS']
    }))

    app.use('/user', userRouter)
    app.use('/auth', authRouter)
    app.use('/todolist', todolistRouter)

    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`)
    })
}

runServer()