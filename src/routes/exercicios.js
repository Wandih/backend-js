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
    
    router.post("/exercicio15/", ControllerExercícios.Ex15);
    
    router.post("/exercicio16/", ControllerExercícios.Ex16);
    
    router.post("/desafio3/", ControllerExercícios.Des3);
    
    router.post("/desafio4/", ControllerExercícios.Des4);
    
    router.post("/exercicio17/", ControllerExercícios.Ex17);
    
    router.post("/exercicio18/", ControllerExercícios.Ex18);
    
    router.post("/exercicio19/", ControllerExercícios.Ex19);
    
    router.post("/exercicio20/", ControllerExercícios.Ex20);

    router.post("/exercicio21", ControllerExercícios.Ex21);
    
    router.post("/exercicio22", ControllerExercícios.Ex22);
    
    router.post("/exercicio23", ControllerExercícios.Ex23);

    router.post("/exercicio24", ControllerExercícios.Ex24);

    router.post("/exercicio25", );

    router.post("/exercicio26", );

    router.post("/exercicio27", );

    router.post("/exercicio28", );

    router.post("/exercicio29", );

    router.post("/exercicio30", );

module.exports = router;