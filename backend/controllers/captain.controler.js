const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service") // importing the captain service for performing the operations on the captain
const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res) => {
    const error = validationResult(req) // all error go in the req and we will check the error by using the validationResult function from the express-validator package.

    if (!error.isEmpty()) { // mean's if there is any error in the request body then we will return the error to the user.
        return res.status(400).json({ errors: error.array() }) // if there is any error in the request body then we will return the error to the user.
    }

    const { fullname, email, password, vehicle } = req.body; // destructuring the request body for getting the fullname,email,password,vehicle from the request body.

    // extra check if the captain already exist with this email so we have to say already registerd. 
    const isCaptainExist = await captainModel.findOne({ email }) // for finding the captain in the database by email.

    if (isCaptainExist) {
        // mean's if there is already a captain with this email then we will return the error to the user.
        return res.status(400).json({ message: "Captain with this email already exists" }) // if there is already a captain with this email then we will return the error to the user.
    }

    const captain = await captainService.createCaptain({// mean's registerCaption function run with given parameter.
        firstname: fullname?.firstname,
        lastname: fullname?.lastname,
        email,
        password,
        color: vehicle?.color,
        plate: vehicle?.plate,
        capacity: vehicle?.capacity,
        vehicleType: vehicle?.vehicleType,
    }); // for creating the captain in the database and then we will return the token to the captain for authentication.

    const token = captain.generateAuthToken() // for generating the token for the captain when he login or register.

    res.status(201).json({ token, captain }) // for sending the token to the captain for authentication.
}