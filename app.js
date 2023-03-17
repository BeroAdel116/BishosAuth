import Express from "express";
import "express-async-errors";
import dotenv from 'dotenv';
dotenv.config()
const app = Express()
import {router as authRouter} from './router/auth.js'
import {notFound as notFoundMiddleware} from './middleware/not-found.js';
import {errorHandlerMiddleware} from './middleware/error-handler.js';

app.use(Express.json())
app.use('/',authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        app.listen(port, ()=> console.log(`server is listening on port: ${port}`))
    } catch(error){
        console.log(error)
    }
}

start()