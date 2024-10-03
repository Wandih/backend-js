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

    Des0 (req, res){
    
        try {
    
            const converter = ServiceExercicio.ConverterAnos(req.body.anos)
        
            res.status(201).json({resultadoConv: converter})
    
            
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Des1 (req, res) {
    
        try {
    
            const result = ServiceExercicio.MudarValor(req.body.A, req.body.B)
    
        
            res.status(201).json({mudanca: result})
            
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
        
    }

    Des2 (req, res) {
    
    
        try {
    
            const result = ServiceExercicio.Maior(req.body.num1, req.body.num2)
    
            res.status(201).json({resultado: result})
            
        } catch (error) {
    
            res.status(422).json({msg: error.message})
            
        }
    
    }

    Ex9 (req, res) {
    
        try {
    
            const nota = ServiceExercicio.CalcularMedia(req.body.media)
    
            res.status(201).json({resultado: nota})
    
        } catch (error) {
            
            res.status(422).json({msg: error.message})
    
        }
      
    }

    Ex10 (req, res) {
    
        try {
    
            const result = ServiceExercicio.CalcularImc(req.body.imch, req.body.imcm)
    
            res.status(201).json({resultado: result})
            
        } catch (error) {
          
            res.status(422).json({msg: error.message})
    
        }
    
    }

    Ex11 (req, res) {
    
    try {
        const result = ServiceExercicio.Operação(req.body.op, req.body.num1, req.body.num2)

        res.status(201).json({resultado: result})

    } catch (error) {
          
        res.status(422).json({msg: error.message})

        }

    }

    Ex12 (req, res) {
    
        try {
            const result = ServiceExercicio.PON(req.body.num1)
    
            res.status(201).json({resultado: result})
    
        } catch (error) {
              
            res.status(422).json({msg: error.message})
    
        }
    }

    Ex13 (req, res){
    
        try {
            const result = ServiceExercicio.ImparPar(req.body.num1)
    
            res.status(201).json({resultado: result})
    
        } catch (error) {
              
            res.status(422).json({msg: error.message})
    
        }
    }

    Ex14 (req, res){
    
        try {
            const result = ServiceExercicio.MaiorQ(req.body.num1, req.body.num2)
    
            res.status(201).json({resultado: result})
    
        } catch (error) {
              
            res.status(422).json({msg: error.message})
    
        }
    }


}
module.exports = new ControllerExercícios()