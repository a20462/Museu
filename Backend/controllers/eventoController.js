const { Evento : EventoModel, Evento } = require('../models/evento');


const eventoController = {
    //ADICIONAR 
    create: async(req, res) => {
        try {
            const evento = {
            tipo: req.body.tipo,
            nome: req.body.nome,
            horario: req.body.horario,
            data: req.body.data,
            }
            const response = await EventoModel.create(evento);

            res.status(201).json({response, msg: "Evento criado com sucesso!"});

        } catch (error) {
            console.log(error)
        }
    },
    //LISTAGEM - ALL
    getAll: async (req, res) => { //resgate de todos os clientes 
        try {
            const eventos = await EventoModel.find();

            res.json(eventos);
        } catch (error) {
            console.log(error);
        }
    },
    //LISTAGEM - BY ID
    get: async (req, res) => {
        try {
            const id = req.params.id
            const evento = await EventoModel.findById(id);

            if(!evento) {
                res.status(404).json({msg: "Evento não encontrado"});
                return;
            }

            res.json(evento);
        } catch (error) {
            console.log(error)
        }
    },
    //APAGAR - BY ID
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const evento = await EventoModel.findById(id);

            if(!evento) {
                res.status(404).json({msg: "Evento não encontrado"});
                return;
            }

            const deletedEvento = await EventoModel.findByIdAndDelete(id);

            res.status(200).json({deletedEvento, msg: "Evento excluído com Sucesso"}); //Exclusões

        } catch (error) {
            console.log(error);
        }
    },
    //ATUALIZAR - BY ID
    update: async (req, res) => {

        const id = req.params.id;

        const evento = {
            tipo: req.body.tipo,
            nome: req.body.nome,
            horario: req.body.horario,
            data: req.body.data,
        };

        const updatedEvento = await EventoModel.findByIdAndUpdate(id, bilhete)

        if(!updatedEvento) {
            res.status(404).json({msg: "Evento não encontrado"});
            return;
        }

        res.status(200).json({evento, msg: "Evento atualizado com sucesso!"})
    },
};

module.exports = eventoController;