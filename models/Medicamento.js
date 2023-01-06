var db = require('../database/connection')

class Medicamento{


    async findAllMed(){
        try {
           var banco = await db.select().table('medicamentos') 
           return banco  
           
        } catch (error) {
            console.log(error)
        } 
    }

    async create(nome,qntd,fabricante,tipo,lote,DTvalidade,DTfabricacao){

    }
}

module.exports = new Medicamento()