const { Bilhete : BilheteModel, Bilhete } = require('../models/bilhete');


const bilheteController = {
    //ADICIONAR 
    create: async(req, res) => {
        try {
            const bilhete = {
            tipo: req.body.tipo,
            preco: req.body.preco,
            evento: req.body.evento,
            horario: req.body.horario,
            data: req.body.data,
            }
            const response = await BilheteModel.create(bilhete);

            res.status(201).json({response, msg: "Bilhete criado com sucesso!"});

        } catch (error) {
            console.log(error)
        }
    },
    //LISTAGEM - ALL
    getAll: async (req, res) => { //resgate de todos os clientes 
        try {
            const bilhetes = await BilheteModel.find();

            res.json(bilhetes);
        } catch (error) {
            console.log(error);
        }
    },
    //LISTAGEM - BY ID
    get: async (req, res) => {
        try {
            const id = req.params.id
            const bilhete = await BilheteModel.findById(id);

            if(!bilhete) {
                res.status(404).json({msg: "Bilhete não encontrado"});
                return;
            }

            res.json(bilhete);
        } catch (error) {
            console.log(error)
        }
    },
    //APAGAR - BY ID
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const bilhete = await BilheteModel.findById(id);

            if(!bilhete) {
                res.status(404).json({msg: "Bilhete não encontrado"});
                return;
            }

            const deletedBilhete = await BilheteModel.findByIdAndDelete(id);

            res.status(200).json({deletedBilhete, msg: "Bilhete excluído com Sucesso"}); //Exclusões

        } catch (error) {
            console.log(error);
        }
    },
    //ATUALIZAR - BY ID
    update: async (req, res) => {

        const id = req.params.id;

        const bilhete = {
            tipo: req.body.tipo,
            preco: req.body.preco,
            evento: req.body.evento,
            horario: req.body.horario,
            data: req.body.data,
        };

        const updatedBilhete = await BilheteModel.findByIdAndUpdate(id, bilhete)

        if(!updatedBilhete) {
            res.status(404).json({msg: "Bilhete não encontrado"});
            return;
        }

        res.status(200).json({bilhete, msg: "Bilhete atualizado com sucesso!"})
    },
};

module.exports = bilheteController;