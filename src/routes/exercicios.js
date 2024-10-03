const express = require("express");
const ControllerExercícios = require('../controllers/exercicios')

const router = express.Router()

    router.post("/exercicio1/", ControllerExercícios.Ex1)
    
    router.post("/exercicio2/", ControllerExercícios.Ex2);
    
    router.post("/exercicio3/", ControllerExercícios.Ex3);
    
    router.post("/exercicio4/", ControllerExercícios.Ex4);
    
    router.post("/exercicio5/", ControllerExercícios.Ex5);
    
    router.post("/exercicio6/", ControllerExercícios.Ex6);
    
    router.post("/exercicio7/", ControllerExercícios.Ex7);
    
    router.post("/exercicio8/", ControllerExercícios.Ex8);
    
    router.post("/desafio0/", ControllerExercícios.Des0);
    
    router.post("/desafio1/", ControllerExercícios.Des1);
    
    router.post("/desafio2/", ControllerExercícios.Des2);
    
    router.post("/exercicio9/", ControllerExercícios.Ex9);
    
    router.post("/exercicio10/", ControllerExercícios.Ex10);
    
    router.post("/exercicio11/", ControllerExercícios.Ex11);
    
    router.post("/exercicio12/", ControllerExercícios.Ex12);
    
    router.post("/exercicio13/", ControllerExercícios.Ex13);
    
    router.post("/exercicio14/", ControllerExercícios.Ex14);
    
    router.post("/exercicio15/", (req, res) =>{
    
            var {a, b, c, base, altura} = req.body
            var area = (base * altura)/2
    
            if(a + b > c){
                res.send(`A área do triângulo é igual a ${area}`)
            }else{
                res.send(`Os valores ${a}, ${b} e ${c} não formam um triângulo`)
            }
    });
    
    router.post("/exercicio16/", (req, res) =>{
    
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
    
    router.post("/desafio3/", (req, res) =>{
    
            var {num1, num2, num3} = req.body
    
            if(num1 < num2 && num1 < num3 ){
                res.send(`O número ${num1} é o menor número`)
            }else if(num2 < num1 && num2 < num3){
                res.send(`O número ${num2} é o menor número`)
            }else{
                res.send(`O número ${num3} é o menor número`)
            }
    });
    
    router.post("/desafio4/", (req, res) =>{
    
            const {ano} = req.body
    
            if(ano % 4 == 0){
                res.send(`${ano} é um ano bissexto`)
            }else{
                res.send(`${ano} não é um ano bissexto `)
            }
    });
    
    router.post("/exercicio17/", (req, res) =>{
    
            const {nota1, nota2, nota3} = req.body
            const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/(2 + 3 + 5)
    
                res.send(`Sua média ponderada é igual a ${media}`)
            
    });
    
    router.post("/exercicio18/", (req, res) =>{
    
            const {fab} = req.body
            const dis = ((fab * 28)/100)
            const imp = ((fab * 45)/100)
            const custo = (fab + dis + imp)
    
                res.send(`O custo ao consumidor do veículo será R$${(custo).toFixed(2)}.`)
    });
    
    router.post("/exercicio19/", (req, res) =>{
    
            const {valor, taxa, tempo} = req.body
            const juros = (valor * taxa)* tempo
            const valor2 = (valor + juros)
    
                res.send(`O capital de valor R$${valor} e juros de R$${(juros).toFixed(2)} possui o valor montante de R$${(valor2).toFixed(2)}`)
    });
    
    router.post("/exercicio20/", (req, res) =>{
    
            const {ipi, valor1, quantia1, valor2, quantia2} = req.body
            const soma = (valor1 * quantia1) * (valor2 * quantia2)
            const porcento = (ipi/100)+1
            const total = soma * porcento
        
                res.send(`O valor total a ser é pago é R$${(total).toFixed(2)}`)
    });
    
    router.post("/exercicio21", (req, res) =>{
    
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
            
    });
    
    router.post("/exercicio22", (req, res) =>{
    
            const {limite, vel} = req.body
            const multa = (limite) + ((limite *20)/100)
            
            if(vel <= limite){
                res.send(`O motorista não receberá multa.`)
            }else if(vel > limite && vel <= multa){
                res.send(` O motorista receberá R$102,00 de multa.`)
            }else if(vel > multa){
                res.send(` O motorista receberá R$500,00 de multa.`)
            }
    });
    
    router.post("/exercicio23", (req, res) =>{
    
            const {num1} = req.body
    
    
            do{
                res.send(`Batata`)
            }while(num1 == 1)
        
                res.send(`Cenoura`)
    });

module.exports = router;