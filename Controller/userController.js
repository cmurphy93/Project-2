const User = require('../Models/User')

//authentication
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

mongoose.Promise = global.Promise

const { JWT_KEY_SECRET } = require('../config');
const { user } = require('../Models/User'); 

const createNewUser = (req, res, next) => {
    const newUser = new User({
        name:'', 
        password:'',
        email:'',
    });

    newUser.save((err) => {
        if (err) {
            return res.status(500).json ({ error: 'Could not create a new user' });
        }
            return res.status(201).json({   message: 'User registration successful'});
    }    
)};

const sendLoginForm = (req, res, next) => {
}

const login = (req, res, next) => {
}