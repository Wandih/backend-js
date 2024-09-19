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

app.post("/exercicio6/", (req, res) =>{

    const {segundos} = req.body
    const minutos = (segundos * 0.01666668).toFixed(5)
    const horas = (segundos * 0.000277778).toFixed(5)

    res.send(`${segundos} segundos equivalem a ${minutos} minutos e a ${horas} horas`)
});

app.post("/exercicio7/", (req, res) =>{

    const {kms} = req.body
    const metros = kms * 1000 
    const cms = kms * 100000

    res.send(`${kms} quilometros equivalem a ${metros} metros e a ${cms} centímetros`)
});

app.post("/exercicio8/", (req, res) =>{

    const {num} = req.body

    res.send({
        Tabuada:{
            X0: num * 0,
            X1: num * 1,
            X2: num * 2,
            X3: num * 4,
            X4: num * 4,
            X5: num * 5,
            X6: num * 6,
            X7: num * 7,
            X8: num * 8,
            X9: num * 9,
            X10: num * 10

        }
    }

    )
    
    });


    app.post("/desafio0/", (req, res) =>{

        const {anos} = req.body
        const meses = anos * 12
        const dias = anos * 365
    
        res.send(`${anos} anos equivalem a ${meses} meses e a ${dias} dias`)
    });

    app.post("/desafio1/", (req, res) =>{

        let {A, B} = req.body
        let C = A
        let A = B
        let B = C

    
        res.send(`Valor antes da troca: A = ${A} e B = ${B}. Valor depois da troca: A = ${A} e B = ${B}`)
    });
    
    


app.listen(3000, function(){
    console.log("Servidor está rodando na porta 3000!")
});

