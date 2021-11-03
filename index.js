const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message:"Bem vindo a minha API."});
    
});

const filmesRouter = require("./filmes");
app.use("/filmes",filmesRouter);

const musicasRouter = require("./musica");
app.use("/musicas", musicasRouter);

const seriesRouter = require("./series");
app.use("/series", seriesRouter);








app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
  });