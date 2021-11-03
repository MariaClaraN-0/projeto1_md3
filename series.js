const express = require("express");
const router = express.Router();

let listaSeries = [];

router.get('/', (req, res) => {
    res.status(200).json({message:"Bem vindos a series."});
    
});

router.get('/series', (req, res) => {
    res.json(listaSeries.filter(Boolean));
});

router.get("/listar/:id", (req, res) => {
    const id = req.params.id
    const serie = listaSeries[id];

    if (!serie) {
        res.json({message:"Serie não encontrada."});
        return;
      }
      res.json(serie);


    })

router.post("/cadastrar", (req,res) =>{
    const series = req.body;

    listaSeries.push(series);

    res.status(201).json({message:'Serie adicionada com sucesso.'})
    
});

router.put("/alterar/:id", (req,res) => {
    const id = req.params.id;
    const serie = listaSeries[id];
    listaSeries[id] = req.body;

    res.status(200).json(listaSeries[id]);
});

router.delete("/deletar/:id", (req, res) => {
    const id = parseInt(req.params.id)
    delete listaSeries[id];
    res.json({message:"Serie excluída com sucesso."});
  });


module.exports = router;