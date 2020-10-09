import { Router } from 'express'
import usuario from './controller/usuario'

const routes = Router()

routes.get('/', (req, res)=>{
    res.send(usuario)
})

export default routes