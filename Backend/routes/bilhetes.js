const router = require("express").Router()

const bilheteController = require("../controllers/bilheteController")

// Funções

//ADICIONAR
router.route("/bilhetes").post((req, res) => bilheteController.create(req,res)); 
//LISTAGEM ALL
router.route("/bilhetes").get((req, res) => bilheteController.getAll(req, res));
//LISTAGEM BY ID
router.route("/bilhetes/:id").get((req, res) => bilheteController.get(req, res));
//APAGAR BY ID
router.route("/bilhetes/:id").delete((req, res) => bilheteController.delete(req, res));
//UPDATE BY ID
router.route("/bilhetes/:id").put((req, res) => bilheteController.update(req,res));

module.exports = router;
