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


//module.exports = somar // Exportando default, uma única função
module.exports = {somar, calcularSalario, calcularPeso, converterTemp}