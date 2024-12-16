const express=require('express')
const router=express.Router()
const {body} = require('express-validator')
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register', [ 
    body('fullname.firstname').notEmpty().withMessage('enter the firstname'),
    body('email').isEmail().withMessage('Password must be at least 5 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at most 10 characters long')
], //array of middlewares
    userController.registerUser ) 

router.post('/login', [
    body('email').isEmail().withMessage('enter a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long' )
], //array of middlewares 
    userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', userController.logoutUser)

module.exports = router 