class ServiceExercicio{
    
    Somar (num1, num2) {
        if(isNaN(num1) || isNaN(num2)){

            throw new Error('Informe um número');

    }
        return num1 + num2;
}
    
    CalcularSalario (valor, horas){
        if(isNaN(valor) || isNaN(horas)){

            throw new Error('Informe um número');

    }
        return valor * horas;
}
    
    CalcularPeso (peso1, peso2, peso3, peso4, peso5){
        if(isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)){

            throw new Error('Informe um número');

    }
        return (peso1 + peso2 + peso3 + peso4 + peso5)/5;
}
    
    ConverterTemp (C){
        if(isNaN(C)){

            throw new Error('Informe um número');

    }
        return ((9 * C) + 160)/5;
}
    
    ConverterMilhas (milhas){
        if(isNaN(milhas)){  

            throw new Error('Informe um número');

    }
        return (milhas * 1.60934)
}
    
    ConverterSec (segundos){
        if(isNaN(segundos)){

            throw new Error('Informe um número');

        }
        return convert = [
            (Number(segundos) * 0.01666668), 
            (Number(segundos) * 0.000277778)
    ]
          
}
    
    ConverterKms (kms){
        if(isNaN(kms)){

            throw new Error('Informe um número');

        }
        return convert = [
            (Number(kms) * 1000).toFixed(1), 
            (Number(kms) * 100000).toFixed(1)
    ]
          
}
    
    Tabuada (num){
        if(isNaN(num)){

            throw new Error('Informe um número');

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
    
    ConverterAnos (anos){
        if(isNaN(anos)){

            throw new Error('Informe um número');

        }else if(anos <= 0){

            throw new Error('Número inválido');

        }
        return convert = [
            (Number(anos) * 12).toFixed(1), 
            (Number(anos) * 365).toFixed(1)
    ]
          
}
    
    MudarValor (A, B){
        if(isNaN(A) || isNaN(B)){

            throw new Error('Informe um número');

        } 
        return convert = [
            
            (A, B),
            
            C = A,
            B = C,
            A = B,
    
            (A, B)
    ] 
}
    
    Maior (num1, num2){
        if(isNaN(num1) || isNaN(num2)){
    
            throw new Error('Informe um número');
    
        } else if (num1 > num2){
    
            return num1
    
        } else if (num1 < num2) {
    
            return num2
    
        } else if (num1 === num2){
            
            return num1 && num2
    }
}
    
    CalcularMedia (nota1, nota2, nota3, media){
    
        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    
            throw new Error('Informe um número');
    
        }
    
        if(nota1 < 0 || nota2 < 0 || nota3 <0){
    
            throw new Error('Nota Inválida');
    
        }
        
        media = ((nota1 + nota2 + nota3)/3).toFixed(1)
    
        if(media >= 7){
    
            return 'aprovado'
    
        } else if (media <7 && media >= 5){
    
            return 'dá pra melhorar'
    
        } else {
            
            return 'reprovado'
    
    }
}
    
    CalcularImc (gen, alt, imch, imcm){
    
        if(isNaN(gen)){
    
            throw new Error('Informe um número');
    
        }
    
        imch = ((72.7 * alt) -58).toFixed(2)
    
        imcm = ((62.1 * alt) -44.7).toFixed(2)
    
        if(gen === 1 && alt < 0){
    
            return 'altura inválida'
    
        } else if(gen === 2 && alt < 0){
    
            return 'altura inválida'
    
        } else if(gen === 1 && alt > 0){
    
            return imch
    
        } else if(gen === 2 && alt > 0){
    
            return imcm
    
        } else{
    
            return 'opção inválida'
    }
}

    Operação (op, num1, num2, ad, sub, mult, divi ){

        if(isNaN(op) || isNaN(num1) || isNaN(num2)){
    
            throw new Error('Informe um número');
    
        }

        if(op > 4 && op < 0){
            throw new Error('Opção inválida. Tente Novamente');
        }

        ad = num1 + num2

        sub = num1 - num2

        mult = num1 * num2

        divi = num1 / num2

        if(op === 1){
    
        return ad

        } else if(op === 2){

        return sub

        } else if(op === 3){

        return mult

        } else{

        return divi
    }
}

    PON (num1){
        
        if(isNaN(num1)){
    
            throw new Error('Informe um número');
    
        }

        if(num1 >= 0){
    
            return 'Esse número é positivo'
    
        }else{
    
            return 'Esse número é negativo'

    }
}

    ImparPar (num1){

        if(isNaN(num1)){
    
            throw new Error('Informe um número');
    
        }

        if(num1 % 2 === 0){
    
            return 'Esse número é positivo'
    
        }else{
    
            return 'Esse número é negativo'

    }

}

    MaiorQ (num1, num2){

        if(isNaN(num1) || isNaN(num2)){
    
            throw new Error('Informe um número');
    
        }

        if(num1 > num2){
            res.send(`O número ${num1} é maior do que ${num2}`)
        }else if(num2 > num1){
            res.send(`O número ${num2} é maior do que ${num1}`)
        }else{
            res.send(`O número ${num1} é igual a ${num2}`)
        }

    }

    Triangulo (a, b, c, base, altura, area){

        if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(base) || isNaN(altura)){
    
            throw new Error('Informe um número');
    
        }

        area = ((base * altura)/2).toFixed(2)

        if(a + b < c || a + c < b || b + c < a){
            res.send(`Não é possível formar um triângulo`)
        }

        if(a === b || a === c || b === c){
            res.send(`A área do triângulo isósceles é igual a ${area}`)
        }else if(a === b && a === c && c === b){
            res.send(`A área do triângulo equilátero é igual a ${area}`)
        }else if (a != b && a != c && b != c){
            res.send(`A área do triângulo escaleno é igual a ${area}`)
        }

    }

    ImpRenda (cpf, dep, renda, des, sal){
        
        if(isNaN(cpf) || isNaN(dep) || isNaN(renda)){
    
            throw new Error('Informe um número');
    
        }

        des = (dep *5)/100

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

    }

    Menor (num1, num2, num3) {

        if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    
            throw new Error('Informe um número');
    
        }

        if(num1 < num2 && num1 < num3 ){
            res.send(`O número ${num1} é o menor número`)
        }else if(num2 < num1 && num2 < num3){
            res.send(`O número ${num2} é o menor número`)
        }else{
            res.send(`O número ${num3} é o menor número`)
        }
    }

    AnoBis (ano) {

        if(isNaN(ano)){
    
            throw new Error('Informe um número');
    
        }

        if(ano % 4 == 0){
            res.send(`${ano} é um ano bissexto`)
        }else{
            res.send(`${ano} não é um ano bissexto `)
        }
    }

    MediaPon (nota1, nota2, nota3, media){

        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    
            throw new Error('Informe um número');
    
        }

        media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/(2 + 3 + 5)

        return media

    }



}




//module.exports = somar // Exportando default, uma única função
module.exports = new ServiceExercicio()