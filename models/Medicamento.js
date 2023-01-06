var db = require('../database/connection')

class Medicamento{


    async findAllMed(){
        try {
           var banco = await db.select().table('medicamentos') 
           return banco  
           
        } catch (error) {
            console.log(error)
            return
        } 
    }

    async create(nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao){
        try {
            console.log(!isNaN(fabricante))
            

            if(!nome || nome == "" || !isNaN(nome) || !quantidade || quantidade == "" || isNaN(quantidade) || !fabricante || fabricante == "" || !tipo || tipo == "" || !lote || lote == ""){

                return{status:false, msg:"O medicamento não foi preenchido corretamente"}
            }
            else{
                var result = await db.insert({nome,quantidade,fabricante,tipo,lote,DTvalidade,DTfabricacao}).table('medicamentos')
                if(result.length > 0){
                 return {status:true, msg: "Medicamento Registrado com sucesso"}
                }
                else{
                 return{status:false, msg:"O medicamento não foi preenchido corretamente"}
                }
            }
         
        } catch (error) {
            console.log(error)
            return{status:false, msg:"O medicamento não foi preenchido corretamente"}
        }
        
        
    }
}

module.exports = new Medicamento()