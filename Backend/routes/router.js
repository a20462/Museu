const express = require("express");
const router = require("express").Router()

// Local ficheiros
const userController = require("../controllers/userController");
const clienteConstroller = require("../controllers/clienteController");
const bilheteController = require("../controllers/bilheteController");
const eventoController = require("../controllers/eventoController");

// Routing
const userRoutes = require("./users");
const clientesRouter = require("./clientes");
const bilhetesRouter = require("./bilhetes");
const eventosRouter = require("./eventos");

// Routing.use
router.use("/", clientesRouter);
router.use("/users", userRoutes);
router.use("/", bilhetesRouter);
router.use("/", eventosRouter);

router.get("/", (req, res) => {
    res.send("API is working");
});

module.exports = router;