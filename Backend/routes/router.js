const express = require("express");
const router = require("express").Router()

// Local ficheiros
const userController = require("../controllers/userController");
const clienteConstroller = require("../controllers/clienteController");

// Routing
const userRoutes = require("./users");
const clientesRouter = require("./clientes");

// Routing.use
router.use("/", clientesRouter);
router.use("/users", userRoutes);

router.get("/", (req, res) => {
    res.send("API is working");
});

module.exports = router;