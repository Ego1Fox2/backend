import mongoose from "mongoose";
const connectDB =  ()=>{
    mongoose. connect(process.env.MONGODB).then(()=>{
        console.log('database connected')
    }).catch((error)=>{
        console.log('data base is not connected',error);
    })
}

export {connectDB}