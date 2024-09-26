const {somar, calcularSalario} = require ('../service/exercicios');
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

})