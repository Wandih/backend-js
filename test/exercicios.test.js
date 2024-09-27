const {somar, calcularSalario, calcularPeso} = require ('../service/exercicios');
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
        const resultado = somar (1,'a')

        expect(resultado).toBe('erro')
    })

    it('Somar uma letra com um número', () =>{
        const resultado = somar ('b',2)

        expect(resultado).toBe('erro')
    })
})

describe('testando a função calcular:  ', () =>{
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
        const resultado = calcularSalario(1, 'a');

        expect(resultado).toBe('erro')
    })

    it('Multiplicar uma letra com um número positivo', () => {
        const resultado = calcularSalario('a', 1);

        expect(resultado).toBe('erro')
    })

    it('Multiplicar um número negativo com uma letra', () => {
        const resultado = calcularSalario(-1, 'a');

        expect(resultado).toBe('erro')
    })

    it('Multiplicar uma letra com um número negativo', () => {
        const resultado = calcularSalario('a', 1);

        expect(resultado).toBe('erro')
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
        const resultado = calcularPeso(1, 1, 1, 1, 'a');

        expect(resultado).toBe('erro')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const resultado = calcularPeso(1, 1, 1, 'a', -1);

        expect(resultado).toBe('erro')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const resultado = calcularPeso(1, 1, 'a', -1, -1);

        expect(resultado).toBe('erro')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const resultado = calcularPeso(1, 'a', -1, -1, -1);

        expect(resultado).toBe('erro')
    })

    it('Calcular a média entre 4 números positivos e 1 letra', () => {
        const resultado = calcularPeso('a', 1, -1, -1, -1);

        expect(resultado).toBe('erro')
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

})