const userModel=require('../models/user.models')
const userService=require('../services/user.service')
const {validationResult} = require('express-validator')

module.exports.registerUser =async (req, res, next) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    console.log(req.body) 
    const {fullname, email, password} =req.body

    const hashedPassword = await userModel.hashPassword(password)

    const user=await userService.createUser({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword})

    const token=user.generateAuthToken()
    console.log('failed here ')
    res.status(201).json({user, token})
}
module.exports.loginUser=async (req, res, next) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} =req.body
    if(!email || !password){
        return res.status(401).json({message: 'email and password are required'})
    }
    const user=await userModel.findOne({email}).select('+password')
    if(!user){
        return res.status(404).json({message: 'user not found'})
    }
    const isMatch=await user.comparePassword(password)
    if(!isMatch){
        return res.status(400).json({message: 'invalid credentials'})
    }
    const token=user.generateAuthToken()
    res.status(200).json({user, token})

}