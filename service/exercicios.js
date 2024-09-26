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

function calcularPeso (peso1, peso2, peso3, peso4, peso5, media){
    if(isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)){
        return 'erro';
    }
    return valor * horas;
}


//module.exports = somar // Exportando default, uma única função
module.exports = {somar, calcularSalario}