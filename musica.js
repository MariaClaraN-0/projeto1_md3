const express = require("express");
const router = express.Router();

let listaMusicas = [];

router.get('/', (req, res) => {
    res.status(200).json({message:"Bem vindos a musicas."});
    
});

router.get('/musicas', (req, res) => {
       res.json(listaMusicas.filter(Boolean));
});

router.get("/listar/:id", (req, res) => {
    const id = req.params.id
    const musica = listaMusicas[id];

    if (!musica) {
        res.json({message:"Musica não encontrada."});
        return;
      }
      res.json(musica);


    })


router.post("/cadastrar", (req,res) =>{
    const musica = req.body;

    listaMusicas.push(musica);

    res.status(201).json({message:'Musica adicionada com sucesso.'})
    
});

router.put("/alterar/:id", (req,res) => {
    const id = req.params.id;
    const musica = listaMusicas[id];
    listaMusicas[id] = req.body;

    res.status(200).json(listaMusicas[id]);
});

router.delete("/deletar/:id", (req, res) => {
    const id = parseInt(req.params.id)
    delete listaMusicas[id];
    res.json({message:"Musica excluída com sucesso."});
  });


module.exports = router;