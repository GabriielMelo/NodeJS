// importando app.
import app from './src/app.js';
const PORT = 3000; // criando porta 



// escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor Rodando no servidor http://localhost:${PORT}`);
});



