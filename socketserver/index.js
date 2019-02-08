const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
io.on('connection',()=>{
  
   app.post('/test', (req, res) =>{
    io.emit('xyz',"Hello all ")
    res.send('Sent to all the clients')
    res.end()
})
})


server.listen("3000", ()=>{
    console.log("Listening...")
})


