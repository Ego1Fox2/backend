import mongoose from "mongoose";
import { type } from "os";
const schema =new mongoose.Schema({
   
    name:{
        type:string,
        require:true
    },
    email:{
        type:string,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now

    }

})


import mongoose from "mongoose";
Const schema = new mongoose.schema({...

})
const user = mongoose.Model('user',schema)
export default user