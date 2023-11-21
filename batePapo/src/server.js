const express = require('express')
const app = express()
const socket = require("socket.io")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//SERVER SETUP
app.get('/', (req, res)=>{
    res.send("Hello There!")
})

app.use(express.static("./public"))

const server = app.listen(8080, ()=>{
    console.log("Servidor rodando que uma belezura!")
})

//SOCKET SETUP
const io = socket(server)   //QUEREMOS QUE ESTEJA INTERLIGADO COM ESTE SERVER!

io.on('connection', (socket)=>{
    console.log("Conexao com o Socket deu certo!", socket.id)
})