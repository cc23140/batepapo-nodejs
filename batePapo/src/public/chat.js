//Fazer Conexao
const socket = io.connect("http://localhost:4000")

//Query DOM
const privateUserMessage = document.querySelector('#private-message')
const message = document.querySelector('#message')
const handle = document.querySelector('#handle')
const btn = document.querySelector('#send')
const output = document.querySelector('#output')




 //Emit Events
btn.addEventListener('click', ()=>{
    handle.disabled = 'true'    //FAZ COM QUE, APÓS O USUÁRIO MANDAR UMA MSG, ELE SEJA IMPOSSIBILITADO DE TROCAR DE NOME DE USUÁRIO
    handle.style.color = 'orange'   //INDICA QUE O USUÁRIO ESTÁ COM O NOME PERMANENTE
    if (message.value != '' && handle.value != ''){
    socket.emit('chat',{
        privateMessage:privateUserMessage.value,
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
socket.on('chat', data=>{
    if (data.privateMessage == ''){
        output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
    }else {
        if(handle.value == data.privateMessage || handle.value == data.handle){
            output.style.color = 'blue'
            output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
            output.style.color = '#555'
            
        }
    }
    
})