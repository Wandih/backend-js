function somar (num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return 'erro';
    }
    return num1 + num2;
}

function calcularSalario (valor, horas){
    if(isNaN(valor) || isNaN(horas)){
        return 'erro';
    }
    return valor * horas;
}

function calcularPeso (peso1, peso2, peso3, peso4, peso5){
    if(isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)){
        return 'erro';
    }
    return (peso1 + peso2 + peso3 + peso4 + peso5)/5;
}

function converterTemp (C){
    if(isNaN(C)){
        return 'erro'
    }
    return ((9 * C) + 160)/5;
}

function converterMilhas (milhas){
    if(isNaN(milhas)){
        return 'erro'
    }
    return (milhas * 1.60934)
}

function converterSec (segundos){
    if(isNaN(segundos)){
        return 'erro'
    }
    return convert = [
        (Number(segundos) * 0.01666668), 
        (Number(segundos) * 0.000277778)
    ]
      
}

function converterKms (kms){
    if(isNaN(kms)){
        return 'erro'
    }
    return convert = [
        (Number(kms) * 1000).toFixed(1), 
        (Number(kms) * 100000).toFixed(1)
    ]
      
}

function tabuada (num){
    if(isNaN(num)){
        return 'erro'
    }
    return tab = [
        (Number(num) * 0).toFixed(1), 
        (Number(num) * 1).toFixed(1),
        (Number(num) * 2).toFixed(1), 
        (Number(num) * 3).toFixed(1),
        (Number(num) * 4).toFixed(1), 
        (Number(num) * 5).toFixed(1),
        (Number(num) * 6).toFixed(1), 
        (Number(num) * 7).toFixed(1),
        (Number(num) * 8).toFixed(1), 
        (Number(num) * 9).toFixed(1),
        (Number(num) * 10).toFixed(1)
    ]
}

function converterAnos (anos){
    if(isNaN(anos)){
        return 'erro'
    }else if(anos <= 0){
        return 'número inválido'
    }
    return convert = [
        (Number(anos) * 12).toFixed(1), 
        (Number(anos) * 365).toFixed(1)
    ]
      
}

function mudarValor (A, B){
    if(isNaN(A) || isNaN(B)){
        return 'erro'
    } 
    return convert = [
        
        (A, B),
        
        C = A,
        B = C,
        A = B,

        (A, B)
    ] 
}

function maior (num1, num2){
    if(isNaN(num1) || isNaN(num2)){

        return 'erro'

    } else if (num1 > num2){

        return num1

    } else if (num1 < num2) {

        return num2
        
    } else if (num1 === num2){
        
        return num1 && num2
    }
}


//module.exports = somar // Exportando default, uma única função
module.exports = {somar, calcularSalario, calcularPeso, converterTemp, converterMilhas, converterSec, converterKms, tabuada, converterAnos, mudarValor, maior}