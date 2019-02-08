var socket = require('socket.io-client')('http://localhost:3000')


socket.on('xyz', (data)=>{
    console.log(data)
})

