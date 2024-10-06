
import User from "../models/user.js";
import sendCookie from "../utils/helper.js";
import bcrypt from "bcrypt"


const register = async(req,res,next)=>{
    try {
            const {email,name,password} =  req.body;
            let user = await User.findOne({email})
            if(user){
               return res.json({message:"User Already Exist"})
            }
            const hasedPassword = await bcrypt.hash(password,9)
            user = await User.create({name,email,password:hasedPassword})
            sendCookie(user,res,"User is registed Successfully",202)
    } catch (error) {
        // console.log(error);
        next(error)
    }
    }
    
    
    const login = async(req,res,next)=>{
        try {
            const {email,name,password} =  req.body;
            const user = await User.findOne({email})
            if(!user){ 
                return res.json({message:"User does not exist, please registor first"})
            }
            console.log(password);
            console.log(user);
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch) return {message:"Password or Email is Incorrect"}
            sendCookie(user,res,"User is Successfully logedIn",200)
    
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }
    

    const logout = async(req,res)=>{
        res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
            message:"Logout Successfully"
        })
    }
    
    const getMyProfile = async(req,res,next)=>{
    try {
        throw Error("This is a new Error")
            res.status(200).json({message:"User Details",user:req.user})
    } catch (error) {
        // console.log(error);
        next(error)
    }
    }
    
    export {register,login,logout,getMyProfile}






