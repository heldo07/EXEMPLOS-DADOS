const { ObjectId } = require("mongodb")
const conn = require("../db/conexao")

class Convidado{

    constructor(nome, age, email){
        this.nome = nome
        this.age = age 
        this.email = email
    }

    save(){
        const guest = conn.db().collection('convidados').insertOne({
            nome : this.nome,
            age : this.age,
            email : this.email
        })
        return guest
    }

    static listar(){
        const lista = conn.db().collection('convidados').find().toArray()
        return lista
    }

    static listarEditar(id){
        const convidado = conn.db().collection('convidados').findOne({id: ObjectId})
        return convidado
    }

    static async editar(id, nome, age, email){
        const convidado = await conn.db().collection('convidados').updateOne(
            {_id: new ObjectId(id)},  // Corrige a conversão do ID
            { $set: { nome: nome, age: age, email: email }})// Corrige a estrutura do update)
        return convidado
        }
    
        static async excluir(id){
            const convidado = await conn.db().collection('convidados').deleteOne({_id: new ObjectId(id)})
            return convidado
        }

}

module.exports = Convidado