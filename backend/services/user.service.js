const User = require('../models/user.model') // importing the user model for performing database operations
const jwt = require('jsonwebtoken') // for creating the token


// it only create the user but it does not return the token to the user because we are not using this function in the registerUser function. we are using this function for creating the user in the database and then we will return the token to the user in the registerUser function.

// this createUser function taken the firstname,lastname,email,password as the parameter. 
module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    
    if(!firstname  || !email || !password) {
        throw new Error('All fields are required')
    }
    const user = new User({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: await User.hashPassword(password) // for hashing the password before saving the user to the database.
    })

    await user.save() // for saving the user to the database.

    return user; // return the user to the registerUser function for creating the token and sending the response to the user.
};