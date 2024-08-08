import express from 'express'
import { Request,Response } from 'express'
import chalk from 'chalk'
import { uploads } from './upload'

const app = express()

const port = 3002
app.post("/uploads", uploads.single('file'),(req:Request,res:Response)=>{
    res.status(200).json({msg:"file successfully uploaded"})

})
//creating server
app.listen(port,()=>{
    console.log(chalk.green(`server running on ${port}`))
})