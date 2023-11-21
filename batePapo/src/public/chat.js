//Fazer Conexao
const socket = io.connect("http://localhost:4000")

//Query DOM
const message = document.querySelector('#message')
const handle = document.querySelector('#handle')
const btn = document.querySelector('#send')
const output = document.querySelector('#output')




 //Emit Events
btn.addEventListener('click', ()=>{
    if (message.value != '' && handle.value != ''){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })   //.emit() é como o .send() do res   //'chat' é o nome que queremos dar
    message.value = ''
    }
    else {
        if(message.value == '') {
                message.placeholder = "Digite algo"

        }
        if(handle.value == '') {
            handle.placeholder = "Digite o nome de Usuário!"
        }
        
    }
})



//Listen for events
socket.on('chat', data=>{
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})