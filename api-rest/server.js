// importando app.
import app from './src/app.js';
import conexao from './infra/conexao_bd.js'
const PORT = 3000; // criando porta 

// fazendo a conexão. 

conexao.connect((erro)=>{
    if(erro){
        console.log(erro,'Connect Failed')
    } else{
        console.log('Connected')
        // escutar a porta 3000
        app.listen(PORT, () =>{
            console.log(`Servidor Rodando no servidor http://localhost:${PORT}`);
        });
    }
})



