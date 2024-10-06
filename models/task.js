























//mongodb+srv://rasabdul49:<db_password>@cluster0.ued1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//dYvhImEIIKEBko0r

import { type } from 'express/lib/response';
import mongoose from 'mongoose';
const schema = new mongoose.schema({
    name:{
        type :String,
        requird:true
    },
    description:{
        type:String,
        requird:false
    },
    isComplete:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'user',
        requird:true
    },
    createdAt:{
        type:date,
        default:Date.now

    }
})






const Task = mongoose.Model('task',schema)

export default Task