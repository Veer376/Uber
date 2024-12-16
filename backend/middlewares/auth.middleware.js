const userModel =require('../models/user.models')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const blacklistTokenModels = require('../models/blacklistToken.models')

module.exports.authUser =async (req, res, next) =>{
    //req.header('Authorization')?.split(' ')[1] this is because auth can be null and we provide the 
    // token the the bearer and then token, so we split it and get the token
    const token=req.header('Authorization')?.split(' ')[1] || req.cookies.token
    if(!token) return res.status(401).json({message: 'unauthorized'})

    
    const isBlacklisted=await blacklistTokenModels.findOne({token})
    if(isBlacklisted) return res.status(401).json({message: 'unauthorized'})

    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET)
        const user=await userModel.findById(decoded._id)
        if(!user) return res.status(404).json({message: 'user not found'})
        
        req.user=user
        next()

    }catch(err){
        return res.status(500).json({message: err.message})
    }
}