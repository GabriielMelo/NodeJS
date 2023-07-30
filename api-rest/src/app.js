import express from 'express'; // requisição do express
const app = express(); // instanciando o app 
//Indicar para o express ler body com json
app.use(express.json())

// Mock ( dados para testes )
const selecoes = [
   { id: 1, selecao: 'Brasil', grupo: 'G',},
   { id: 2, selecao: 'Suiça', grupo: 'G',},
   { id: 3, selecao: 'Servia', grupo: 'G',},
   { id: 4, selecao: 'Camarões', grupo: 'G',}
];

// função auxiliar para buscar selecoes por id

const buscarSelecaoPorId = id =>{
    return selecoes.filter(selecao =>
        selecao.id == id)
}
// pegar posição index do elemento no array por ID
const buscaIndexSelecao = id => {
    return selecoes.findIndex(selecao => selecao.id == id )
}

// criar rota padrão ou raiz
app.get('/', (requisicao, resposta) => {
    resposta.send('Curso De Node JS');
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
})

app.get('/selecoes/:id', (req,res)=>{
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req,res)=>{
    selecoes.push(req.body)
    res.status(201).send('Selecao cadastrada com sucesso')
})
// Rota de delete 
app.delete('/selecoes/:id', (req,res)=>{
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index,1);
    res.send(`Seleção com id ${req.params.id} Excluida com sucesso.`)
})

app.put('/selecoes/:id', (req,res)=>{
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo   = req.body.grupo;
    res.json(selecoes);
})

// exportando nossa aplicação instanciada do express.
export default app;



// o pequeno roubo do grande nunu