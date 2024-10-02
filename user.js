import user from"../models/user.js"
import jwt from "jsonwebtoken"
try{
    const register= async(req,res)=>{
        const{email,name,password} = req.body;
        let user = await user.findone({email})
        if (user) return{message:'user already exsist'}
        const hasedPassword = await bcrypt.hash(password,9)
        user = await user.create({name,email,password:hasedPassword})
        const token = await jwt.sign({_id:user_id},'mySecret')
        res.status(200).cookie(token,{maxAge:30*60*1000}).jason({
            message:'user is registerd successfuly'
        })
    
    }catch (error){
        console.log(error);
    }
    }
  const login = async(req,res)=>{

    try{

    const{email,password,name} =req.body;
    const user = await user.findone({email})
    if (!user){
        return {message: 'user does not exsit please register first'}
    }
    console.log(password)
    console.log(user)
    if(!isMatch)  return{message:'password or email is incorrect'}
   // signedCookie(user,res,'user is login,200')
    const token = await jwt.sign({_id:user.id},'mySecret')
    res.status(200).cookie('token',token,{maxage:30*60*1000}).jason({
        message:'user is successfully login'
    })

}catch(error){
    console.log(error)
 }  

 const logout = async(req,res)=>{


res.status(200).cookie('token',"",{expire:newDate(date.now())}).json({
    message:'logout successfully'
})

}
try{

const getMyProfile = async(req,res)=>{
    const {email} = req.body;
    const userDetails = await user.findone({email})
    res.status(200).jason({
        message:'user details',userDetails
    })

}catch (error){
    console.log(error)
}
export{register,login,logout,getMyProfile}