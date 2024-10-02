import mongoose from "mongoose";
const connectDB =  ()=>{
    mongoose. connect('process.env.MONGODB).then(()=>{
        console.log('database connected')
    }).catch (()=>{
        console.log('data base is not connected');
    })
}

export {connectDB}