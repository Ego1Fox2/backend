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








const PORT = 5000 || 3000


mongoose.connect('mongodb.//localhost:27017/super',{
    useNewUrlParser:true,
    NewUnifiedTopology:true
}).then(()=>{
  console.log('data base is  connented',console.error);
  
}).catch((error)=>{
  console.log('data base is not connected',error);
});
app.get('/',funtion(req,res) {
  res.send('hello world')
})
app.listen(Port,()=>{
  console.log(`my first server is running at http//localhost:${PORT}`);
})



mongoose.connect('mongodb://localhost:27017',{dbName:"super"}).then(()=>{
  console.log('data base is connected')

    }).catch(()=>{
  console.lod ('data base is not connected')
});
    

app.get('/', funtion(req,res) {
    res.send('hello world')
});

app.listen(PORT,()=>{
  console.log(`my first server is running http://localhost:${PORT}`)
})



