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

    async create(req,res){
        var {nome,qntd,fabricante,tipo,lote,DTvalidade,DTfabricacao} = req.body
        
    }
}

module.exports = new MedicamentoController()