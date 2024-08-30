const express = require ('express')
const app = express();


app.get("/exercicio1/", (req, res) =>{
    
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2)
    
    res.json({ message: "A soma dos números é igual a " + resultado});
});

app.get("/exercicio2/", (req, res) =>{
    
    const valor = req.query.valor
    const hora = req.query.hora

    const resultado = Number(valor) * Number(hora)
    
    res.json({ message: resultado});
});

app.get("/exercicio3/", (req, res) =>{
    
    const peso1 = req.query.peso1
    const peso2 = req.query.peso2
    const peso3 = req.query.peso3
    const peso4 = req.query.peso4
    const peso5 = req.query.peso5
    

    const resultado = Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5)

    const media = resultado/5
    
    res.json({ message: "A média dos pesos é igual a " + media});
});

app.get("/exercicio4/", (req, res) =>{
    
    const C = req.query.C

    const A = 9 * Number(C)

    const B = A + 160

    const D = B/5

    const F = D
    
    res.json({ message: C + "°C em Fahrenheit é igual a " + F + "°F"});
});



app.get("/exercicio5/", (req, res) =>{
    
    const milhas = req.query.milhas
    const kms = 1.60934 * Number(milhas)

    
    res.json({ message: milhas + " milhas são equivalentes a " + kms + "kms"});
});


app.listen(3000, function(){
    console.log("Servidor está rodando na porta 3000!")
});