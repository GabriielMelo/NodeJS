import { Router } from 'express'
import SelecaoController from "./app/controllers/SelecaoController.js"
const router = Router()

// Rotas
router.get('/selecoes', SelecaoController.index)

 // rota de requisição por ID
router.get('/selecoes/:id', SelecaoController.show)

// rota de inserção
router.post('/selecoes', SelecaoController.store)

// Rota de update
router.put('/selecoes/:id', SelecaoController.update)

// Rota de delete 
router.delete('/selecoes/:id',SelecaoController.delete)

export default router