

const express = require("express")

const ConvidadoController = require("../controller/ConvidadoController")

const router = express.Router()

router.get("/", ConvidadoController.home)
router.get("/guest", ConvidadoController.guest)
router.get("/hi", ConvidadoController.hi)
router.get("/cadastrar", ConvidadoController.cadastrar)
router.post("/cadastrar", ConvidadoController.cadastrarPost)
router.get("/listar", ConvidadoController.listar)
router.get("/editar/:id", ConvidadoController.listarEditar)
router.post("/editar", ConvidadoController.editar)
router.get("/excluir/:id", ConvidadoController.excluir)


module.exports = router
