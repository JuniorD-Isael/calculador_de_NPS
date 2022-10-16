import express, {request, response} from 'express';

const app = express();


/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */


// http://localhost:3333
app.get("/", (request, response) => {

    return response.json({message: "Olá, Mundo"});
});

// 1 param => Rota(Recurso API)
// 2 pram => request, responce
app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
});

app.listen(3333, () => console.log("Server is running"));
