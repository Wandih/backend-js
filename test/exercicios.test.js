const {somar, calcularSalario, calcularPeso, converterTemp, converterMilhas, converterSec, converterKms, tabuada, converterAnos, mudarValor, maior, calcularMedia, calcularImc} = require ('../src/services/exercicios');
const {describe, it, expect} = require('@jest/globals');

describe('testando a função somar:  ', () =>{
    //faz os its (testes)

    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);

        expect(resultado).toBe(3)
    })

    it('Somar dois números negativos', () => {
        const resultado = somar(-1, -2);

        expect(resultado).toBe(-3)
    })

    it('Somar um número positivo com um negativo', () =>{
        const resultado = somar (1,-2)

        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com um positivo', () =>{
        const resultado = somar (-1,2)

        expect(resultado).toBe(1)
    })
    
    it('Somar um número negativo com 0', () =>{
        const resultado = somar (-1,0)

        expect(resultado).toBe(-1)
    })
    
    it('Somar 0 com um número negativo', () =>{
        const resultado = somar (0,-1)

        expect(resultado).toBe(-1)
    })

    it('Somar um número com uma letra', () =>{
        const funSomar =  () => somar (1,'a')

        expect(funSomar).toThrow('Informe um número')
    })

    it('Somar uma letra com um número', () =>{
        const funSomar =  () => somar ('b',2)

        expect(funSomar).toThrow('Informe um número')
    })
})

describe('testando a função calcularSalario:  ', () =>{
    it('Multiplicar dois números positivos', () => {
        const resultado = calcularSalario(1, 2);

        expect(resultado).toBe(2)
    })

    it('Multiplicar dois números negativos', () => {
        const resultado = calcularSalario(-1, -2);

        expect(resultado).toBe(2)
    })

    it('Multiplicar um número positivo com um negativo', () => {
        const resultado = calcularSalario(1, -2);

        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número negativo com um positivo', () => {
        const resultado = calcularSalario(-1, 2);

        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número positivo com uma letra', () => {
        const funMulti = () => calcularSalario(1, 'a');

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar uma letra com um número positivo', () => {
        const funMulti = () => calcularSalario('a', 1);

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar um número negativo com uma letra', () => {
        const funMulti = () => calcularSalario(-1, 'a');

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar uma letra com um número negativo', () => {
        const funMulti = () => calcularSalario('a', 1);

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar um número positivo com um número com vírgula', () => {
        const resultado = calcularSalario(1, 2.2);

        expect(resultado).toBe(2.2)
    })

    it('Multiplicar um número com vírgula com um número positivo', () => {
        const resultado = calcularSalario(2.2, 1);

        expect(resultado).toBe(2.2)
    })

    it('Multiplicar um número negativo com um número com vírgula', () => {
        const resultado = calcularSalario(-1, 2.2);

        expect(resultado).toBe(-2.2)
    })

    it('Multiplicar um número com vírgula com um número negativo', () => {
        const resultado = calcularSalario(-2.2, 1);

        expect(resultado).toBe(-2.2)
    })

})

describe('testando a função calcularPeso:  ', () =>{
        
    it('Calcular a média entre 5 números positivos', () => {
            const resultado = calcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = calcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = calcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = calcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = calcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 5 números negativos', () => {
        const resultado = calcularPeso(-1, -1, -1, -1, -1);

        expect(resultado).toBe(-1)
    })
    

    it('Calcular a média entre 4 números negativos e 1 positivo', () => {
        const resultado = calcularPeso(-1, -1, -1, -1, 1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 3 números negativos e 2 positivos', () => {
        const resultado = calcularPeso(-1, -1, -1, 1, 1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 2 números negativos e 3 positivos', () => {
        const resultado = calcularPeso(-1, -1, 1, 1, 1);

        expect(resultado).toBe(0.2)
    })
    

    it('Calcular a média entre 1 número negativo e 4 positivos', () => {
        const resultado = calcularPeso(-1, 1, 1, 1, 1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 5 números positivos', () => {
            const resultado = calcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = calcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = calcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = calcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = calcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 5 números positivos', () => {
            const resultado = calcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = calcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = calcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = calcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = calcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => calcularPeso(1, 1, 1, 1, 'a');

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => calcularPeso(1, 1, 1, 'a', -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => calcularPeso(1, 1, 'a', -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => calcularPeso(1, 'a', -1, -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => calcularPeso('a', 1, -1, -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos inteiros e 1 número positivo com vírgula', () => {
        const resultado = calcularPeso(1, 1, 1, 1, 1.1);

        expect(resultado).toBe(1.02)
    })

    it('Calcular a média entre 3 números positivos inteiros e 2 números positivos com vírgula', () => {
        const resultado = calcularPeso(1, 1, 1, 1.1, 1.1);

        expect(resultado).toBe(1.0399999999999998)
    })

    it('Calcular a média entre 2 números positivos inteiros e 3 números positivos com vírgula', () => {
        const resultado = calcularPeso(1, 1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.06)
    })

    it('Calcular a média entre 1 número positivo inteiro e 4 números positivos com vírgula', () => {
        const resultado = calcularPeso(1, 1.1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.08)
    })

    it('Calcular a média entre 5 números positivos com vírgula', () => {
        const resultado = calcularPeso(1.1, 1.1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.1)
    })

 })

describe('testando a função converterTemp:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = converterTemp(1);

        expect(resultado).toBe(33.8)
    })
    
    it('Convertendo um número negativo com vírgula', () => {
        const resultado = converterTemp(-1);

        expect(resultado).toBe(30.2)
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = converterTemp(1.5);

        expect(resultado).toBe(34.7)
    })

    it('Convertendo uma letra', () => {
        const conTemp = () => converterTemp('a');

        expect(conTemp).toThrow('Informe um número')
    })



})

describe('testando a função converterMilhas:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = converterMilhas(1);

        expect(resultado).toBe(1.60934)
    })
    
    it('Convertendo um número negativo com vírgula', () => {
        const resultado = converterMilhas(-1);

        expect(resultado).toBe(-1.60934)
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = converterMilhas(1.5);

        expect(resultado).toBe(2.41401)
    })

    it('Convertendo uma letra', () => {
        const funConv = () => converterMilhas('a');

        expect(funConv).toThrow('Informe um número')
    })




 })

describe('testando a função converterSec:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = converterSec(1);

        expect(resultado).toStrictEqual([0.01666668, 0.000277778])
    })

    it('Convertendo um número negativo inteiro', () => {
        const resultado = converterSec(-1);

        expect(resultado).toStrictEqual([-0.01666668, -0.000277778])
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = converterSec(2.5);

        expect(resultado).toStrictEqual([0.0416667, 0.000694445])
    })

    it('Convertendo um número negativo com vírgula', () => {
        const resultado = converterSec(-2.5);

        expect(resultado).toStrictEqual([-0.0416667, -0.000694445])
    })

    it('Convertendo uma letra', () => {
        const funCon = () => converterSec('a');

        expect(funCon).toThrow('Informe um número')
    })


})

describe('testando a função converterKms:  ', () =>{

    it('Convertendo um número inteiro positivo', () => {
        const resultado = converterKms(1)

        expect(resultado).toStrictEqual(["1000.0", "100000.0"])
    })

    it('Convertendo um número inteiro negativo', () => {
        const resultado = converterKms(-1)

        expect(resultado).toStrictEqual(["-1000.0", "-100000.0"])
    })

    it('Convertendo um número positivo com uma única casa decimal', () => {
        const resultado = converterKms(2.5)

        expect(resultado).toStrictEqual(["2500.0", "250000.0"])
    })

    it('Convertendo um número negativo com uma única casa decimal', () => {
        const resultado = converterKms(-2.5)

        expect(resultado).toStrictEqual(["-2500.0", "-250000.0"])
    })

    it('Convertendo um número positivo com múltiplas casas decimais', () => {
        const resultado = converterKms(2.55)

        expect(resultado).toStrictEqual(["2550.0", "255000.0"])
    })

    it('Convertendo um número negativo com múltiplas casas decimais', () => {
        const resultado = converterKms(-2.55)

        expect(resultado).toStrictEqual(["-2550.0", "-255000.0"])
    })

    it('Convertendo uma letra', () => {
        const funConve = () => converterKms('a')

        expect(funConve).toThrow('Informe um número')
    })


})

describe('testando a função tabuada:  ', () =>{

    it('Tabuada de um número inteiro positivo', () => {
        const resultado = tabuada(1)

        expect(resultado).toStrictEqual(["0.0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "10.0"])
    })

    it('Tabuada de um número inteiro negativo', () => {
        const resultado = tabuada(-1)

        expect(resultado).toStrictEqual(["0.0", "-1.0", "-2.0", "-3.0", "-4.0", "-5.0", "-6.0", "-7.0", "-8.0", "-9.0", "-10.0"])
    })

    it('Tabuada de um número com 1 casa decimal positivo', () => {
        const resultado = tabuada(1.2)

        expect(resultado).toStrictEqual(["0.0", "1.2", "2.4", "3.6", "4.8", "6.0", "7.2", "8.4", "9.6", "10.8", "12.0"])
    })

    it('Tabuada de um número com 1 casa decimal negativo', () => {
        const resultado = tabuada(-1.2)

        expect(resultado).toStrictEqual(["0.0", "-1.2", "-2.4", "-3.6", "-4.8", "-6.0", "-7.2", "-8.4", "-9.6", "-10.8", "-12.0"])
    })

    it('Tabuada de uma letra', () => {
        const funTab = () => tabuada('a')

        expect(funTab).toThrow('Informe um número')
    })


})

describe('testando a função converterAnos:  ', () =>{

    it('Convertendo um valor positivo', () => {
        const resultado = converterAnos(1)

        expect(resultado).toStrictEqual(["12.0", "365.0"])
    })

    it('Convertendo um valor negativo', () => {
        const funAn = () => converterAnos(-1)

        expect(funAn).toThrow('Número inválido')
    })

    it('Convertendo uma letra', () => {
        const funAno = () => converterAnos('a')

        expect(funAno).toThrow('Informe um número')
    })

    it('Convertendo um valor positivo com vírgula', () => {
        const resultado = converterAnos(1.1)

        expect(resultado).toStrictEqual(["13.2", "401.5"])
    })

    it('Convertendo um valor negativo com vírgula', () => {
        const funAnos = () => converterAnos(-1.1)

        expect(funAnos).toThrow('Número inválido')
    })
})

describe('testando a função mudarValor:  ', () =>{

})

describe('testando a função maior:  ', () =>{

    it('testando números positivos', () => {
        const resultado = maior(3, 2)

        expect(resultado).toBe(3)
    })

    it('testando números negativos', () => {
        const resultado = maior(1, -2)

        expect(resultado).toBe(1)
    })

    it('testando letras', () => {
        const funMaior = () => maior(-2, 'b')

        expect(funMaior).toThrow('Informe um número')
    })

    it('testando números positivos com vírgula', () => {
        const resultado = maior(1.2, 1.1)

        expect(resultado).toBe(1.2)
    })

    it('testando números negativos com vírgula', () => {
        const resultado = maior(1.2, -1.3)

        expect(resultado).toBe(1.2)
    })

})

describe('testando a função calcularMedia:  ', () =>{

    it('Calculando média com números inteiros positivos', () => {
        const resultado = calcularMedia(5, 5, 6)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

    it('Calculando média com 2 números inteiros positivos e 1 negativo', () => {
        const funNota = () => calcularMedia(5, 5, -6)

        expect(funNota).toThrow("Nota Inválida")
    })

    it('Calculando média com 1 números inteiro positivo e 2 negativos', () => {
        const funNot = () => calcularMedia(5, -5, -6)

        expect(funNot).toThrow("Nota Inválida")
    })

    it('Calculando média com 3 números negativos', () => {
        const funNo = () => calcularMedia(5, -5, -6)

        expect(funNo).toThrow("Nota Inválida")
    })

    it('Calculando média com 2 números inteiros positivos e uma letra', () => {
        const funN = () => calcularMedia('a', 5, 5)

        expect(funN).toThrow("erro")
    })

    it('Calculando média com números positivos com vírgula', () => {
        const resultado = calcularMedia(5.5, 5.5, 6.5)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

    it('Calculando média com números positivos inteiros e com vírgula', () => {
        const resultado = calcularMedia(5, 5.5, 6.5)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

  })
 
describe('testando a função calcularImc:  ', () =>{

    it('Calculando IMC masculino usando valor exato', () => {
        const resultado = calcularImc(1, 100)

        expect(resultado).toStrictEqual("7212.00")
    })

    it('Calculando IMC feminino usando valor exato', () => {
        const resultado = calcularImc(2, 100)

        expect(resultado).toStrictEqual("6165.30")
    })

    it('Calculando IMC masculino usando valor exato negativo', () => {
        const funPeso = () => calcularImc(1, -100)

        expect(funPeso).toThrow("altura inválida")
    })

    it('Calculando IMC feminino usando valor exato negativo', () => {
        const funPeso = () => calcularImc(2, -100)

        expect(funPeso).toStrictEqual("altura inválida")
    })

})

/* describe('testando a função converterSec:  ', () =>{

    it('', () => {
        const resultado = 

        expect(resultado).toStrictEqual([])
    })


    describe('testando a função converterSec:  ', () =>{

    it('', () => {
        const resultado = 

        expect(resultado).toStrictEqual([])
    })
}) */