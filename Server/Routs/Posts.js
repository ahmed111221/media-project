import express from 'express'
import { getMessage,createPost } from '../controler/posts.js'

const Router = express.Router()

Router.get('/', getMessage)
Router.post('/', createPost)


export default Router;