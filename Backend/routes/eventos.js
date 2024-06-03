const router = require("express").Router()

const eventoController = require("../controllers/eventoController")

// Funções

//ADICIONAR
router.route("/eventos").post((req, res) => eventoController.create(req,res)); 
//LISTAGEM ALL
router.route("/eventos").get((req, res) => eventoController.getAll(req, res));
//LISTAGEM BY ID
router.route("/eventos/:id").get((req, res) => eventoController.get(req, res));
//APAGAR BY ID
router.route("/eventos/:id").delete((req, res) => eventoController.delete(req, res));
//UPDATE BY ID
router.route("/eventos/:id").put((req, res) => eventoController.update(req,res));

module.exports = router;
