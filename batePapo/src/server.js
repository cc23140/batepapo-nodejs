const express = require('express')
const app = express()
const socket = require("socket.io")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//SERVER SETUP


const server = app.listen(4000, ()=>{
    console.log("Servidor rodando que uma belezura!")
})

app.use(express.static("public"))


//SOCKET SETUP
const io = socket(server)

let allClients = []

io.on('connection', socket =>{

    console.log('Cliente conectado com sucesso! Id: ', socket.id)
    allClients.push(socket)
    socket.on('chat', data=>{
        io.sockets.emit('chat', data) //io.sockets se refere à todos os sockets conectados no server , e o .emit() manda msg pra eles

    socket.on('disconnect', (socket)=>{
        console.log(allClients)
        io.sockets.emit('out')
        
        const i = allClients.indexOf(socket)
        delete allClients[i]
        console.log(allClients)

    
    })
        
    })
})
