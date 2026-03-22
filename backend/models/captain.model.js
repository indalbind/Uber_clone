// This file conten the model of the captain

const mongoose = require("mongoose")
const bcrypt = require("bcrypt") // for hashing the password
const jwt = require("jsonwebtoken") // for creating the token

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'firstname should be at least 3 characters']
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname should be at least 3 characters']
        }
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'],
        minlength: [5, 'email should be at least 5 characters']
    },
    password: {
        type: String,
        required: true,
        select: false, // for not showing the password in the response
        
        minlength: [6, 'password should be at least 6 characters']
    },

    // we nead socketId for know which user is online and which is offline.
    socketId: {
        type: String,
    },

    status: {
        type:String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'color should be at least 3 characters']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'plate should be at least 3 characters']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'capacity should be at least 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle','auto']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    }

})

// funtion for doing some thing like password hashing and token genration before saving the user to the database.
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' }) // for generating the token for the user when he login or register. the token will expire in 1 hour.

    return token
}

// function for comparing the password when the user login. the compair password function is defined in the user model for comparing the password when the user login.
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password) // for comparing the password when the user login. the compair password function is defined in the user model for comparing the password when the user login.
}

// captainSchema.methods.hasPassword mean's am making a function with name hasPassword which work
captainSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const captainModel = mongoose.model("Captain", captainSchema) // mean's the collection name is Captain and the schema is captainSchema

module.exports = captainModel

