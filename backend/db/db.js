const mongoose = require('mongoose')


function conneectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log('connected to DB')
    }).catch(err => console.log(err))
}


module.exports = conneectToDb  