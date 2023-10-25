const mongoose = require("mongoose");

// ----- USER SCHEMA
const userSchema = mongoose.Schema({
    Name: {type: String, require: true, unique: true, minlenght: 3},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minlenght: 6}, 
})

const User = mongoose.model("User", userSchema, "users")




module.exports = {User}