const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userSchema = new Schema({
    name: {
        type: String,
    },
    sername: {
        type: Array
    }
})

const Users = mongoose.model('users', userSchema);
module.exports = Users;