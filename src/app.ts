import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()


app.get('/', (req: any, res: any)=>{
    res.send('Hello typescript!')
})

app.listen(3000)