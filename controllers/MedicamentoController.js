var Med = require('../models/Medicamento')
var db = require('../database/connection')
const { render } = require('ejs')

class MedicamentoController{
    async index(req,res){
        res.render("index")
    }

    async listMed(req,res){
        try {
            var resultado = await Med.findAllMed()
            res.render('listMed', {medicamentos: resultado})
           
        } catch (error) {
            console.log(error)
        } 
    }
    async addMed(req,res){
        res.render('addMed')
    }
    async create(req,res){
        var {nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao} = req.body 
        
        try {
           var result = await Med.create(nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao) 
           if(result){
            res.send(result.msg)
           }
           else{
            res.send(result.msg)
           }
           
        } catch (error) {
            console.log(error)
        }
      
        
    }
}

module.exports = new MedicamentoController()