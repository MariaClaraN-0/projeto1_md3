const express = require("express");
const router = express.Router();

let listaFilmes = [];

router.get('/', (req, res) => {
    res.status(200).json({message:"Bem vindo a filmes."});
    
});

router.get('/filmes', (req, res) => {
    res.json(listaFilmes.filter(Boolean));
    
});

router.get("/listar/:id", (req, res) => {
    const id = req.params.id
    const filme = listaFilmes[id];

    if (!filme) {
        res.json({message:"Filme não encontrado."});
        return;
      }
      res.json(filme);


    })

router.post("/cadastrar", (req,res) =>{
    const filme = req.body;

    listaFilmes.push(filme);

    res.status(201).json({message:'Filme adicionado com sucesso.'})
    
})

router.put("/alterar/:id", (req,res) => {
    const id = req.params.id;
    const filme = listaFilmes[id];
    listaFilmes[id] = req.body;

    res.status(200).json(listaFilmes[id]);
});

router.delete("/deletar/:id", (req, res) => {
    const id = parseInt(req.params.id)
    delete listaFilmes[id];
    res.json({message:"Filme excluído com sucesso."});
  });


module.exports = router;