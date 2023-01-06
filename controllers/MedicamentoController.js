var Med = require('../models/Medicamento')
var db = require('../database/connection')
const { render } = require('ejs')

class MedicamentoController{
    async index(req,res){
        res.render("index")
    }

    async addMed(req,res){
        res.render('addMed')
    }

    async pdfGenerated(req,res){
        res.render('pdfGenerated')
    }

    async pdfGenerate(req,res){
        var resultado = await Med.findAllMed()
        res.render('pdfGenerate',{medicamentos: resultado})
    }

    async updateStock(req,res){
        var resultado = await Med.findAllMed()
        res.render('updateStock',{medicamentos: resultado})
    }

    async exitRequests(req,res){
        var resultado = await Med.findAllMed()
        res.render('exitRequests',{medicamentos: resultado})
    }

    async listMed(req,res){
        try {
            var resultado = await Med.findAllMed()
            res.render('listMed', {medicamentos: resultado})
           
        } catch (error) {
            console.log(error)
        } 
    }
    
    async create(req,res){
        var {nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao} = req.body 
        
        try {
           var result = await Med.create(nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao) 
           if(result){
            res.redirect('/listmed')
           }
           else{
            res.send(result.msg)
           }
           
        } catch (error) {
            console.log(error)
        }
      
        
    }

    async delete(req,res){
        var {id, quantidade} = req.body

        var result = await Med.delete(id, quantidade)
        if(result.status){
            res.redirect('/listmed')
        }
      
    }

    async update(req,res){
        var {id, quantidade} = req.body
        var result = await Med.updateStock(id, quantidade)
        if(result.status){
            res.redirect('/listmed')
        }

    }

    async exit(req,res){
        var {id, quantityExit, DTSaida,} = req.body
        await Med.exitRequests(id, quantityExit, DTSaida)
        res.redirect('/pdfGenerated')
        
    }
}

module.exports = new MedicamentoController()