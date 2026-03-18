const User = require('../models/user.model') // importing the user model for performing database operations
const jwt = require('jsonwebtoken') // for creating the token
const userService = require('../services/user.service') // importing the user service for performing the operations on the user
const { validationResult } = require('express-validator') // for validating the request body from express-validator package

// creating the API for register the user

module.exports.registerUser = async (req, res, next) => {
    // here we write the code for register the user and also we need to validate the request body before registering the user.

    const errors = validationResult(req) // all error go in the req and we will check the error by using the validationResult function from the express-validator package.

    if (!errors.isEmpty()) { // mean's if there is any error in the request body then we will return the error to the user.
        return res.status(400).json({ errors: errors.array() }) // if there is any error in the request body then we will return the error to the user.
    }

    // if every thing ok so we move forward for creating the user in the database and then we will return the token to the user for authentication.
    const { fullname, email, password } = req.body; // destructuring the request body for getting the fullname,email,password from the request body.

    const user = await userService.createUser({ 
        firstname: fullname?.firstname,
        lastname: fullname?.lastname,
        email, 
        password 
    }) // for creating the user in the database and then we will return the token to the user for authentication.

    const token = user.generateAuthToken() // for generating the token for the user when he login or register.

    res.status(201).json({ token,user}) // for sending the token to the user for authentication.
    
}