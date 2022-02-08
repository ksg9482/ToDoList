import express = require('express')
const userRouter = require('./routers/user')


function runServer(){
    const app = express()
    const PORT = 8080
    
    app.get('/',(req, res)=>{
        res.end('success')
    })

    app.use('/user', userRouter)

    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`)
    })
}

runServer()