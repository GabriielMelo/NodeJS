import mysql from 'mysql'

const conexao = mysql.createConnection({ 
    host: 'localhost',
    port: '3306',
    user:'root',
    password: 'root',
    database: 'bdcopa'
})
// fazendo a conexão. 

conexao.connect();

/**
 * Executa um codigo sql com ou sem valores.
 * @param {string} sql  instrução sql a ser executado
 * @param {string=id / [selecao,id]} valores a serem passados para o sql
 * @param {string } mensagemReject  mensagem a ser exibida em caso de reject
 * @returns  retorna um objeto de uma Promise
 */

export const consulta = (sql,valores='',mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row)
        })
    })
}

export default conexao
