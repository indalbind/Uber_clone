const Captain = require('../models/captain.model') // importing the captain model for performing the operations on the captain

const jwt = require('jsonwebtoken') // for creating the token
const captainService = require('../services/captain.service') // importing the captain service for performing the operations on the captain
const { validationResult } = require('express-validator') // for validating the request body from express-validator package

// creating the API for register the captain

module.exports.createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required')
    }

    const captain = new Captain({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: await Captain.hashPassword(password), // for hashing the password before saving the captain to the database.
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        },
    })

    await captain.save() // for saving the captain to the database.
    
    return captain; // return the captain to the registerCaptain function for creating the token and sending the response to the captain.
}