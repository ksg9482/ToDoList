import express = require('express')


function runServer(){
    const app = express()
    const PORT = 8080
    
    app.get('/',(req, res)=>{
        res.end('success')
    })

    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`)
    })
}

runServer()