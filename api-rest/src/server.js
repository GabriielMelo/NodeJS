// importando app.
import app from './app.js'
const PORT = process.env.PORT || 3000; // criando porta 



// escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor Rodando no servidor http://localhost:${PORT}`);
});



