//requisição do express
import express from 'express'; 
import conexao from '../infra/conexao_bd.js'
 // instanciando o app 
 const app = express();

//Indicar para o express ler body com json
app.use(express.json())

// função auxiliar para buscar selecoes por id
const buscarSelecaoPorId = id =>{
    return selecoes.filter(selecao =>
        selecao.id == id)
}

// pegar posição index do elemento no array por ID
const buscaIndexSelecao = id => {
    return selecoes.findIndex(selecao => selecao.id == id )
}

// Rotas
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql,(erro,resultado)=>{
        if(erro){
            res.status(404).json({'erro': erro})
        } else { 
            res.status(200).json(resultado)
        }
    })
})

app.get('/selecoes/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id , (erro,resultado)=>{
        const linha = resultado[0]
        if(erro){
            res.status(404).json({'erro': erro})
        } else { 
            res.status(200).json(linha)
        }
    })
})

app.post('/selecoes', (req,res)=>{
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao , (erro,resultado)=>{
        if(erro){
            res.status(400).json({'erro': erro})
        } else { 
            res.status(201).json(resultado)
        }
    })
})
// Rota de delete 
app.delete('/selecoes/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id , (erro,resultado)=>{
        if(erro){
            res.status(404).json({'erro': erro})
        } else { 
            res.status(200).json(resultado)
        }
    })

})

app.put('/selecoes/:id', (req,res)=>{
    const id = req.params.id;
    const selecao = req.body;
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao,id] , (erro,resultado)=>{
        if(erro){
            res.status(400).json({'erro': erro})
        } else { 
            res.status(200).json(resultado)
        }
    })
})

// exportando nossa aplicação instanciada do express.
export default app;



