const express = require ('express')
const path = require('path')
const app = express();
app.use(express.json())


app.post("/exercicio1/", (req, res) =>{
    const {num1, num2} = req.body
    res.send(`A soma de ${num1} + ${num2} é igual ${num1 + num2}`)
});

app.post("/exercicio2/", (req, res) =>{
    
    const {valor, hora} = req.body
    const resultado = valor * hora
    res.send(`O valor total a ser pago é R$${resultado}`)
    
});

app.post("/exercicio3/", (req, res) =>{
    
    const {peso1, peso2, peso3, peso4, peso5} = req.body
    
    const resultado = (peso1+ peso2 + peso3 + peso4 + peso5)/5

    
    
    res.send(`A média dos pesos é igual a ${resultado}`);
});

app.post("/exercicio4/", (req, res) =>{
    
    const {C} = req.body

    const F = ((9 *C) + 160)/5
    

    
    res.send(`${C}°C equivalem a °${F}F`);
});



app.post("/exercicio5/", (req, res) =>{
    
    const {milhas} = req.body
    const kms = (milhas * 1.60934).toFixed(2)

    res.send(`${milhas} milhas equivalem a ${kms} quilômetros`);
});


app.listen(3000, function(){
    console.log("Servidor está rodando na porta 3000!")
});

