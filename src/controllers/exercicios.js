const ServiceExercicio = require('../services/exercicios')

class ControllerExercícios {
    
    Ex1 (req, res) {
        // tente realizar o que estiver dentro das {} - bloco de comando
        
        try {
            
            const resultado = ServiceExercicio.Somar(req.body.num1, req.body.num2);
        
            res.status(201).json({resultadoPost: resultado})
    
        } catch(error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex2 (req, res) {
    
        try {
            
            const salario = ServiceExercicio.CalcularSalario(req.body.valor, req.body.horas);
    
            res.status(201).json({totalSalario: salario})
    
        } catch(error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex3 (req, res){
    
        try {
            
            const media = ServiceExercicio.CalcularPeso(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
    
            res.status(201).json({totalPeso: media})
            
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex4 (req, res) {
        
        try {
            
            const F = ServiceExercicio.ConverterTemp(req.body.C)
        
            res.status(201).json({tempConv: F})
    
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex5 (req, res) {
        
        try {
            
            const kms = ServiceExercicio.ConverterMilhas(req.body.milhas)
    
            res.status(201).json({totalKms: kms})
    
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex6 (req, res) {
    
        try {
            
            const conversao = ServiceExercicio.ConverterSec(req.body.segundos)
    
            res.status(201).json({conversaoFinal: conversao})
    
    
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex7 (req, res){
    
        try {
            
            const convert = ServiceExercicio.ConverterKms(req.body.kms)
    
            res.status(201).json({terminarConv: convert})
            
        } catch (error) {
         
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex8 (req, res) {
    
        try {
            
            const convert = ServiceExercicio.Tabuada(req.body.num)
    
            res.status(201).json({resultadoTab: convert})
            
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Des1 (req, res){
    
        try {
    
            const converter = ServiceExercicio.ConverterAnos(req.body.anos)
        
            res.status(201).json({resultadoConv: converter})
    
            
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }
}

module.exports = new ControllerExercícios()