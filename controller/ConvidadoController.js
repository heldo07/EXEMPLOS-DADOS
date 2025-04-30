const Convidado = require("../model/Convidado")
let test = 0

module.exports = class routesController{
    //Rota1
static hi(req, res){
    res.render("hi" ,{nomeView : "View nome : hi.hbs"})
}

//Rota2
static home (req, res){
    res.render("home" ,{nomeView : "View nome : home.hbs"})
}


//rota3
static guest(req, res){
    const user = {
        nome:"João",
        age: 20,
        email:"joao@email.com",
        nomeView: "View : guest.hbs"
    }
        res.render("guest",{user : user})
}

//Rota4
static cadastrar (req, res){
    res.render("cadastrar" ,{nomeView : "View nome : cadastar.hbs"})
}

static async cadastrarPost(req, res){
    const nome  = req.body.nome
    const age   = req.body.age
    const email = req.body.email

    const convidado = new Convidado(nome, age, email)
    console.log(JSON.stringify(convidado))
    convidado.save()

    res.redirect('/')

}

    static async listar (req, res){   
        console.log("passou no listar")
        const lista = await Convidado.listar()
        res.render('listar',{lista})
    }

    static async listarEditar(req, res){
        console.log("passou no listarEditar")
        let id = req.params.id 
        test = id
        console.log(id)
        const convidado = await Convidado.listarEditar(id)
        res.render('editar', { convidado })
    }

    static async editar(req, res){
        console.log("Tentou editar")
        console.log(JSON.stringify(req.body) + " body")
        const convidado = await Convidado.editar(test)
        res.render('editar')
    }

    static async editar(req, res){
        const id    = req.body.id
        const nome  = req.body.name
        const age   = req.body.age
        const email = req.body.email

        const convidado = await Convidado.editar(id, nome, age, email)
        res.redirect('/listar')
    }

    static async excluir(req, res){
        let id = req.params.id 
        console.log(id)
        const convidado = await Convidado.excluir(id)
        res.redirect('/listar')
    }
}