const ServiceExercicio = require ('../src/services/exercicios')
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
        const resultado = ServiceExercicio.CalcularSalario(1, 2);

        expect(resultado).toBe(2)
    })

    it('Multiplicar dois números negativos', () => {
        const resultado = ServiceExercicio.CalcularSalario(-1, -2);

        expect(resultado).toBe(2)
    })

    it('Multiplicar um número positivo com um negativo', () => {
        const resultado = ServiceExercicio.CalcularSalario(1, -2);

        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número negativo com um positivo', () => {
        const resultado = ServiceExercicio.CalcularSalario(-1, 2);

        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número positivo com uma letra', () => {
        const funMulti = () => ServiceExercicio.CalcularSalario(1, 'a');

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar uma letra com um número positivo', () => {
        const funMulti = () => ServiceExercicio.CalcularSalario('a', 1);

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar um número negativo com uma letra', () => {
        const funMulti = () => ServiceExercicio.CalcularSalario(-1, 'a');

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar uma letra com um número negativo', () => {
        const funMulti = () => ServiceExercicio.CalcularSalario('a', 1);

        expect(funMulti).toThrow('Informe um número')
    })

    it('Multiplicar um número positivo com um número com vírgula', () => {
        const resultado = ServiceExercicio.CalcularSalario(1, 2.2);

        expect(resultado).toBe(2.2)
    })

    it('Multiplicar um número com vírgula com um número positivo', () => {
        const resultado = ServiceExercicio.CalcularSalario(2.2, 1);

        expect(resultado).toBe(2.2)
    })

    it('Multiplicar um número negativo com um número com vírgula', () => {
        const resultado = ServiceExercicio.CalcularSalario(-1, 2.2);

        expect(resultado).toBe(-2.2)
    })

    it('Multiplicar um número com vírgula com um número negativo', () => {
        const resultado = ServiceExercicio.CalcularSalario(-2.2, 1);

        expect(resultado).toBe(-2.2)
    })

})

describe('testando a função calcularPeso:  ', () =>{
        
    it('Calcular a média entre 5 números positivos', () => {
            const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 5 números negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(-1, -1, -1, -1, -1);

        expect(resultado).toBe(-1)
    })
    

    it('Calcular a média entre 4 números negativos e 1 positivo', () => {
        const resultado = ServiceExercicio.CalcularPeso(-1, -1, -1, -1, 1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 3 números negativos e 2 positivos', () => {
        const resultado = ServiceExercicio.CalcularPeso(-1, -1, -1, 1, 1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 2 números negativos e 3 positivos', () => {
        const resultado = ServiceExercicio.CalcularPeso(-1, -1, 1, 1, 1);

        expect(resultado).toBe(0.2)
    })
    

    it('Calcular a média entre 1 número negativo e 4 positivos', () => {
        const resultado = ServiceExercicio.CalcularPeso(-1, 1, 1, 1, 1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 5 números positivos', () => {
            const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 5 números positivos', () => {
            const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, 1);
    
            expect(resultado).toBe(1)
    })

    it('Calcular a média entre 4 números positivos e 1 negativo', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, -1);

        expect(resultado).toBe(0.6)
    })

    it('Calcular a média entre 3 números positivos e 2 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, -1, -1);

        expect(resultado).toBe(0.2)
    })

    it('Calcular a média entre 2 números positivos e 3 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, -1, -1, -1);

        expect(resultado).toBe(-0.2)
    })

    it('Calcular a média entre 1 número positivo e 4 negativos', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, -1, -1, -1, -1);

        expect(resultado).toBe(-0.6)
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => ServiceExercicio.CalcularPeso(1, 1, 1, 1, 'a');

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => ServiceExercicio.CalcularPeso(1, 1, 1, 'a', -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => ServiceExercicio.CalcularPeso(1, 1, 'a', -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => ServiceExercicio.CalcularPeso(1, 'a', -1, -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const funCal = () => ServiceExercicio.CalcularPeso('a', 1, -1, -1, -1);

        expect(funCal).toThrow('Informe um número')
    })

    it('Calcular a média entre 4 números positivos inteiros e 1 número positivo com vírgula', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1, 1.1);

        expect(resultado).toBe(1.02)
    })

    it('Calcular a média entre 3 números positivos inteiros e 2 números positivos com vírgula', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1, 1.1, 1.1);

        expect(resultado).toBe(1.0399999999999998)
    })

    it('Calcular a média entre 2 números positivos inteiros e 3 números positivos com vírgula', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.06)
    })

    it('Calcular a média entre 1 número positivo inteiro e 4 números positivos com vírgula', () => {
        const resultado = ServiceExercicio.CalcularPeso(1, 1.1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.08)
    })

    it('Calcular a média entre 5 números positivos com vírgula', () => {
        const resultado = ServiceExercicio.CalcularPeso(1.1, 1.1, 1.1, 1.1, 1.1);

        expect(resultado).toBe(1.1)
    })

 })

describe('testando a função converterTemp:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = ServiceExercicio.ConverterTemp(1);

        expect(resultado).toBe(33.8)
    })
    
    it('Convertendo um número negativo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterTemp(-1);

        expect(resultado).toBe(30.2)
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterTemp(1.5);

        expect(resultado).toBe(34.7)
    })

    it('Convertendo uma letra', () => {
        const conTemp = () => ServiceExercicio.ConverterTemp('a');

        expect(conTemp).toThrow('Informe um número')
    })



})

describe('testando a função converterMilhas:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = ServiceExercicio.ConverterMilhas(1);

        expect(resultado).toBe(1.60934)
    })
    
    it('Convertendo um número negativo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterMilhas(-1);

        expect(resultado).toBe(-1.60934)
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterMilhas(1.5);

        expect(resultado).toBe(2.41401)
    })

    it('Convertendo uma letra', () => {
        const funConv = () => ServiceExercicio.ConverterMilhas('a');

        expect(funConv).toThrow('Informe um número')
    })




 })

describe('testando a função converterSec:  ', () =>{

    it('Convertendo um número positivo inteiro', () => {
        const resultado = ServiceExercicio.ConverterSec(1);

        expect(resultado).toStrictEqual([0.01666668, 0.000277778])
    })

    it('Convertendo um número negativo inteiro', () => {
        const resultado = ServiceExercicio.ConverterSec(-1);

        expect(resultado).toStrictEqual([-0.01666668, -0.000277778])
    })

    it('Convertendo um número positivo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterSec(2.5);

        expect(resultado).toStrictEqual([0.0416667, 0.000694445])
    })

    it('Convertendo um número negativo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterSec(-2.5);

        expect(resultado).toStrictEqual([-0.0416667, -0.000694445])
    })

    it('Convertendo uma letra', () => {
        const funCon = () => ServiceExercicio.ConverterSec('a');

        expect(funCon).toThrow('Informe um número')
    })


})

describe('testando a função converterKms:  ', () =>{

    it('Convertendo um número inteiro positivo', () => {
        const resultado = ServiceExercicio.ConverterKms(1)

        expect(resultado).toStrictEqual(["1000.0", "100000.0"])
    })

    it('Convertendo um número inteiro negativo', () => {
        const resultado = ServiceExercicio.ConverterKms(-1)

        expect(resultado).toStrictEqual(["-1000.0", "-100000.0"])
    })

    it('Convertendo um número positivo com uma única casa decimal', () => {
        const resultado = ServiceExercicio.ConverterKms(2.5)

        expect(resultado).toStrictEqual(["2500.0", "250000.0"])
    })

    it('Convertendo um número negativo com uma única casa decimal', () => {
        const resultado = ServiceExercicio.ConverterKms(-2.5)

        expect(resultado).toStrictEqual(["-2500.0", "-250000.0"])
    })

    it('Convertendo um número positivo com múltiplas casas decimais', () => {
        const resultado = ServiceExercicio.ConverterKms(2.55)

        expect(resultado).toStrictEqual(["2550.0", "255000.0"])
    })

    it('Convertendo um número negativo com múltiplas casas decimais', () => {
        const resultado = ServiceExercicio.ConverterKms(-2.55)

        expect(resultado).toStrictEqual(["-2550.0", "-255000.0"])
    })

    it('Convertendo uma letra', () => {
        const funConve = () => ServiceExercicio.ConverterKms('a')

        expect(funConve).toThrow('Informe um número')
    })


})

describe('testando a função tabuada:  ', () =>{

    it('Tabuada de um número inteiro positivo', () => {
        const resultado = ServiceExercicio.Tabuada(1)

        expect(resultado).toStrictEqual(["0.0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "10.0"])
    })

    it('Tabuada de um número inteiro negativo', () => {
        const resultado = ServiceExercicio.Tabuada(-1)

        expect(resultado).toStrictEqual(["0.0", "-1.0", "-2.0", "-3.0", "-4.0", "-5.0", "-6.0", "-7.0", "-8.0", "-9.0", "-10.0"])
    })

    it('Tabuada de um número com 1 casa decimal positivo', () => {
        const resultado = ServiceExercicio.Tabuada(1.2)

        expect(resultado).toStrictEqual(["0.0", "1.2", "2.4", "3.6", "4.8", "6.0", "7.2", "8.4", "9.6", "10.8", "12.0"])
    })

    it('Tabuada de um número com 1 casa decimal negativo', () => {
        const resultado = ServiceExercicio.Tabuada(-1.2)

        expect(resultado).toStrictEqual(["0.0", "-1.2", "-2.4", "-3.6", "-4.8", "-6.0", "-7.2", "-8.4", "-9.6", "-10.8", "-12.0"])
    })

    it('Tabuada de uma letra', () => {
        const funTab = () => ServiceExercicio.Tabuada('a')

        expect(funTab).toThrow('Informe um número')
    })


})

describe('testando a função converterAnos:  ', () =>{

    it('Convertendo um valor positivo', () => {
        const resultado = ServiceExercicio.ConverterAnos(1)

        expect(resultado).toStrictEqual(["12.0", "365.0"])
    })

    it('Convertendo um valor negativo', () => {
        const funAn = () => ServiceExercicio.ConverterAnos(-1)

        expect(funAn).toThrow('Número inválido')
    })

    it('Convertendo uma letra', () => {
        const funAno = () => ServiceExercicio.ConverterAnos('a')

        expect(funAno).toThrow('Informe um número')
    })

    it('Convertendo um valor positivo com vírgula', () => {
        const resultado = ServiceExercicio.ConverterAnos(1.1)

        expect(resultado).toStrictEqual(["13.2", "401.5"])
    })

    it('Convertendo um valor negativo com vírgula', () => {
        const funAnos = () => ServiceExercicio.ConverterAnos(-1.1)

        expect(funAnos).toThrow('Número inválido')
    })
})

describe('testando a função mudarValor:  ', () =>{

})

describe('testando a função maior:  ', () =>{

    it('testando números positivos', () => {
        const resultado = ServiceExercicio.Maior(3, 2)

        expect(resultado).toBe(3)
    })

    it('testando números negativos', () => {
        const resultado = ServiceExercicio.Maior(1, -2)

        expect(resultado).toBe(1)
    })

    it('testando letras', () => {
        const funMaior = () => ServiceExercicio.Maior(-2, 'b')

        expect(funMaior).toThrow('Informe um número')
    })

    it('testando números positivos com vírgula', () => {
        const resultado = ServiceExercicio.Maior(1.2, 1.1)

        expect(resultado).toBe(1.2)
    })

    it('testando números negativos com vírgula', () => {
        const resultado = ServiceExercicio.Maior(1.2, -1.3)

        expect(resultado).toBe(1.2)
    })

})

describe('testando a função calcularMedia:  ', () =>{

    it('Calculando média com números inteiros positivos', () => {
        const resultado = ServiceExercicio.CalcularMedia(5, 5, 6)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

    it('Calculando média com 2 números inteiros positivos e 1 negativo', () => {
        const funNota = () => ServiceExercicio.CalcularMedia(5, 5, -6)

        expect(funNota).toThrow("Nota Inválida")
    })

    it('Calculando média com 1 números inteiro positivo e 2 negativos', () => {
        const funNot = () => ServiceExercicio.CalcularMedia(5, -5, -6)

        expect(funNot).toThrow("Nota Inválida")
    })

    it('Calculando média com 3 números negativos', () => {
        const funNo = () => ServiceExercicio.CalcularMedia(5, -5, -6)

        expect(funNo).toThrow("Nota Inválida")
    })

    it('Calculando média com 2 números inteiros positivos e uma letra', () => {
        const funN = () => ServiceExercicio.CalcularMedia('a', 5, 5)

        expect(funN).toThrow("erro")
    })

    it('Calculando média com números positivos com vírgula', () => {
        const resultado = ServiceExercicio.CalcularMedia(5.5, 5.5, 6.5)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

    it('Calculando média com números positivos inteiros e com vírgula', () => {
        const resultado = ServiceExercicio.CalcularMedia(5, 5.5, 6.5)

        expect(resultado).toStrictEqual("dá pra melhorar")
    })

  })
 
describe('testando a função calcularImc:  ', () =>{

    it('Calculando IMC masculino usando valor exato', () => {
        const resultado = ServiceExercicio.CalcularImc(1, 100)

        expect(resultado).toStrictEqual("7212.00")
    })

    it('Calculando IMC feminino usando valor exato', () => {
        const resultado = ServiceExercicio.CalcularImc(2, 100)

        expect(resultado).toStrictEqual("6165.30")
    })

    it('Calculando IMC masculino usando valor exato negativo', () => {
        const funPeso = () => ServiceExercicio.CalcularImc(1, -100)

        expect(funPeso).toThrow("altura inválida")
    })

    it('Calculando IMC feminino usando valor exato negativo', () => {
        const funPeso = () => ServiceExercicio.CalcularImc(2, -100)

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