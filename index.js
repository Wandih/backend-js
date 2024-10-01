const express = require ('express')
const path = require('path');
const { somar, calcularSalario, calcularPeso, converterTemp, converterMilhas, converterSec, converterKms, tabuada, converterAnos, mudarValor, maior } = require('./service/exercicios');
const app = express();
app.use(express.json())


app.post("/exercicio1/", (req, res) =>{
    
    const resultado = somar(req.body.num1, req.body.num2);
    
    res.status(201).json({resultadoPost: resultado})
    
});

app.post("/exercicio2/", (req, res) =>{
    
    const salario = calcularSalario(req.body.valor, req.body.horas);

    res.status(201).json({totalSalario: salario})
    
});

app.post("/exercicio3/", (req, res) =>{
    
    const media = calcularPeso(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)

    res.status(201).json({totalPeso: media})

});

app.post("/exercicio4/", (req, res) =>{
    
    const F = converterTemp(req.body.C)
    
    res.status(201).json({tempConv: F})

});

app.post("/exercicio5/", (req, res) =>{
    
    const kms = converterMilhas(req.body.milhas)

    res.status(201).json({totalKms: kms})
});

app.post("/exercicio6/", (req, res) =>{

    const conversao = converterSec(req.body.segundos)

    res.status(201).json({conversaoFinal: conversao})
});

app.post("/exercicio7/", (req, res) =>{

    const convert = converterKms(req.body.kms)

    res.status(201).json({terminarConv: convert})
});

app.post("/exercicio8/", (req, res) =>{

    const convert = tabuada(req.body.num)

    res.status(201).json({resultadoTab: convert})
    
    });


    app.post("/desafio0/", (req, res) =>{

        const converter = converterAnos(req.body.anos)
    
        res.status(201).json({resultadoConv: converter})
    });

    app.post("/desafio1/", (req, res) =>{

        const result = mudarValor(req.body.A, req.body.B)

    
        res.status(201).json({mudanca: result})
    });

    app.post("/desafio2/", (req, res) =>{

        const result = maior(req.body.num1, req.body.num2)

        res.status(201).json({resultado: result})

    });

    app.post("/exercicio9/", (req, res) =>{

        const {nota1, nota2, nota3} = req.body
        const media = (nota1 + nota2 + nota3)/3

        if(media >= 7){
            res.send(`Parabéns, você foi aprovado!`)
        }else if(media < 7 & media >=5){
            res.send(`Você está em recuperação`)
        }else if (media < 5){
            res.send(`Você foi reprovado`)
        }
    });

    app.post("/exercicio10/", (req, res) =>{

        const {gen, alt} = req.body
        var imch = ((72.7*alt)-58).toFixed(2)
        var imcm = ((62.1*alt)-44.7).toFixed(2)

        if(gen == 1){
            res.send(`Seu IMC é igual a ${imch}`)
        }else if(gen == 2){
            res.send(`Seu IMC é igual a ${imcm}`)
        }else if (gen != 1 && gen != 2){
            res.send(`Gênero inválido, tente novamente`)
        }
    });

    app.post("/exercicio11/", (req, res) =>{

        const {op, num1, num2} = req.body

        if(op == 1){
            res.send(`A soma dos numúmeros ${num1} e ${num2} é igual a ${num1 + num2}`)
        }else if(op == 2){
            res.send(`A subtração dos numúmeros ${num1} e ${num2} é igual a ${num1 - num2}`)
        }else if (op == 3){
            res.send(`A divisão dos numúmeros ${num1} e ${num2} é igual a ${num1 / num2}`)
        }else if (op == 4){
            res.send(`A multiplicação dos numúmeros ${num1} e ${num2} é igual a ${num1 * num2}`)
        }else{
            res.send(`Operação inválida`)
        }
    });

    app.post("/exercicio12/", (req, res) =>{

        const {num1} = req.body

        if(num1 >= 0){
            res.send(`${num1} é um número positivo`)
        }else{
            res.send(`${num1} é um número negativo`)
        }
    });

    app.post("/exercicio13/", (req, res) =>{

        const {num1} = req.body

        if(num1 % 2 == 0){
            res.send(`${num1} é um número par`)
        }else{
            res.send(`${num1} é um número ímpar`)
        }
    });

    app.post("/exercicio14/", (req, res) =>{

        var {num1, num2} = req.body

        if(num1 > num2){
            res.send(`O número ${num1} é maior do que ${num2}`)
        }else if(num2 > num1){
            res.send(`O número ${num2} é maior do que ${num1}`)
        }else{
            res.send(`O número ${num1} é igual a ${num2}`)
        }
    });

    app.post("/exercicio15/", (req, res) =>{

        var {a, b, c, base, altura} = req.body
        var area = (base * altura)/2

        if(a + b > c){
            res.send(`A área do triângulo é igual a ${area}`)
        }else{
            res.send(`Os valores ${a}, ${b} e ${c} não formam um triângulo`)
        }
    });

    app.post("/exercicio16/", (req, res) =>{

        var {cpf, dep, renda} = req.body
        var des = (dep *5)/100
        sal = renda - (renda * des).toFixed(2)

        if(sal <= 2824.00){
            res.send(`Você está isento de pagar imposto de renda.`)
        }else if(sal > 2824.00 && sal <= 4236.00){
            res.send(`Você deverá pagar R$${((sal * 5)/100).toFixed(2)} de imposto de renda.`)
        }else if(sal > 4236.00 && sal <= 7060.00){
            res.send(`Você deverá pagar R$${((sal * 10)/100).toFixed(2)} de imposto de renda.`)
        }else if(sal > 7060.00 && sal <= 9884.00){
            res.send(`Você deverá pagar R$${((sal * 15)/100).toFixed(2)} de imposto de renda.`)
        }else if(sal > 9884.00){
            res.send(`Você deverá pagar R$${((sal * 20)/100).toFixed(2)} de imposto de renda.`)
        }
    });

    app.post("/desafio3/", (req, res) =>{

        var {num1, num2, num3} = req.body

        if(num1 < num2 && num1 < num3 ){
            res.send(`O número ${num1} é o menor número`)
        }else if(num2 < num1 && num2 < num3){
            res.send(`O número ${num2} é o menor número`)
        }else{
            res.send(`O número ${num3} é o menor número`)
        }
    });

    app.post("/desafio4/", (req, res) =>{

        const {ano} = req.body

        if(ano % 4 == 0){
            res.send(`${ano} é um ano bissexto`)
        }else{
            res.send(`${ano} não é um ano bissexto `)
        }
    });

    app.post("/exercicio17/", (req, res) =>{

        const {nota1, nota2, nota3} = req.body
        const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/(2 + 3 + 5)

            res.send(`Sua média ponderada é igual a ${media}`)
        }
    );

    app.post("/exercicio18/", (req, res) =>{

        const {fab} = req.body
        const dis = ((fab * 28)/100)
        const imp = ((fab * 45)/100)
        const custo = (fab + dis + imp)

            res.send(`O custo ao consumidor do veículo será R$${(custo).toFixed(2)}.`)
        }
    );

    app.post("/exercicio19/", (req, res) =>{

        const {valor, taxa, tempo} = req.body
        const juros = (valor * taxa)* tempo
        const valor2 = (valor + juros)

            res.send(`O capital de valor R$${valor} e juros de R$${(juros).toFixed(2)} possui o valor montante de R$${(valor2).toFixed(2)}`)
        }
    );

    app.post("/exercicio20/", (req, res) =>{

        const {ipi, valor1, quantia1, valor2, quantia2} = req.body
        const soma = (valor1 * quantia1) * (valor2 * quantia2)
        const porcento = (ipi/100)+1
        const total = soma * porcento
    
            res.send(`O valor total a ser é pago é R$${(total).toFixed(2)}`)
        }
    );

    app.post("/exercicio21", (req, res) =>{

        const {r1, r2, r3, r4, r5, r6, r7, r8} = req.body
        const soma = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8
        
        if(soma == 4 ){
            res.send(`Pessoa classificada como Suspeita do Crime.`)
        }else if(soma >= 5 & soma <= 7 ){
            res.send(`Pessoa classificada como Possível Criminosa.`)
        }else if(soma == 8){
            res.send(`Pessoa classificada como Assassina.`)
        }else if(soma <=3){
            res.send(`Pessoa classificada como Inocente.`)
        }
        
    }
    );

    app.post("/exercicio22", (req, res) =>{

        const {limite, vel} = req.body
        const multa = (limite) + ((limite *20)/100)
        
        if(vel <= limite){
            res.send(`O motorista não receberá multa.`)
        }else if(vel > limite && vel <= multa){
            res.send(` O motorista receberá R$102,00 de multa.`)
        }else if(vel > multa){
            res.send(` O motorista receberá R$500,00 de multa.`)
        }
    }
    );

    app.post("/exercicio23", (req, res) =>{

        const {num1} = req.body


        do{
            res.send(`Batata`)
        }while(num1 == 1)
    
            res.send(`Cenoura`)
        }
    );



    




    
    


app.listen(3000, function(){
    console.log("Servidor está rodando na porta 3000!")
});

