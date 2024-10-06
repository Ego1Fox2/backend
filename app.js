import express from 'express'
import mongoose, { connect } from 'mongoose'
import { config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {connectDB} from './db/database.js'
import userRouter from '.router/user.js' 
export const app = express()
config({
  path: '.db/config.env'
})
connectDB()
app.user(userRouter)
app.get('/',(req,res)=>{
  res.json({
    message:'hello backend'
  })
})
const PORT = process.env.PORT || 7000
app.listen(PORT,()=>{
  console.log(`My server is running on port ${PORT}`)
})






