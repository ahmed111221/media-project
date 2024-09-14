import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import nodemon from 'nodemon'
import Postrouts from './Routs/Posts.js'

const App = express();
App.use(bodyParser.json({limit: '30mb', extended: true}))
App.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
App.use(cors());

const URLconextion = 'mongodb+srv://mollfaceboock:mollfaceboock321@mysocialdatabase.lzuqt.mongodb.net/?retryWrites=true&w=majority&appName=MySocialDataBase'
const PORT = process.env.PORT|| 5000;

mongoose.connect(URLconextion).then(()=>{
    App.listen(PORT,()=>{
        console.log("i'm listen to port :"+ PORT)
    })
    console.log("conected");
}).catch(()=>{
    console.log("not conected");
})


App.use('/Posts', Postrouts)
