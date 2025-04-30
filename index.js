// PARTE DE CONFIGURAÇÃO
const express = require("express");

const conn = require("./db/conexao");

const exphbs = require("express-handlebars");

const bodyparser = require("body-parser");

const rotas = require("./routes/rotas");

const convidado = require("./model/Convidado");

//PARTE DE REQUISIÇÃO
const app = express();

//CONFIGURAÇÃO DO BODY-PARSER
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", rotas);

const port = 3000;
app.use("/public", express.static(__dirname + "/public"));

//CONFIGURAR O TEMPLATE ENGINE
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Rota1
app.get("/hi", (req, res) => {
  res.render("hi", { nomeView: "View nome : hi.hbs" });
});

//Rota2
app.get("/", (req, res) => {
  res.render("home", { nomeView: "View nome : home.hbs" });
});

app.listen(port, () =>
  console.log(`Exemplo de conexão com MongoDB na porta${port}`)
);
