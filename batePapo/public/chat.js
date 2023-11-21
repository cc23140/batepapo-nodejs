//Fazer Conexao
const socket = io.connect("http://localhost:8080", ()=>{
    console.log("Conexao bem sucedida")
})