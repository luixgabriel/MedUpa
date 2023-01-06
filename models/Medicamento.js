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
            
            if(!nome || nome == "" || !isNaN(nome) || !quantidade || quantidade == "" || isNaN(quantidade) || !fabricante || fabricante == "" || !isNaN(fabricante) || !tipo || tipo == "" || !lote || lote == ""){

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

    async delete(id, quantidade){

        try {
            if(quantidade <= 0){
                 await db.where({id: id}).delete().table('medicamentos')
                 return {status: true}
                }
            else{
                var result = await db.where({id: id}).update({quantidade: quantidade-1}).into('medicamentos')
                return {status: true}
            }
        } catch (error) {
            console.log(error)
            return{status: false}
        }
       
    }

    async updateStock(id, quantidade){
        if(quantidade){
            try {
                var result = await db.where({id: id}).update({quantidade: qntd}).table('medicamentos')
                return{status: true}
            } catch (error) {
                    console.log(error)
            }
            
            
        }else{
            res.redirect('listamed')
        }
    }




    }


module.exports = new Medicamento()