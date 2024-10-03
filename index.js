const express = require ('express');
const router = require('./src/routes/exercicios');

const app = express();

app.use(express.json())

app.use(router)

app.listen(3000, function(){
    console.log("Servidor está rodando na porta 3000!")
});

