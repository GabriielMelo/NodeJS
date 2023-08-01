//requisição do express
import express from 'express'; 
import routes from './routes.js';
// instanciando o app 
 const app = express();



//Indicar para o express ler body com json
app.use(express.json())

 // Usar o Router ( rotas movidas para o arquivo routes.js)

 app.use(routes)

// exportando nossa aplicação instanciada do express.
export default app;



