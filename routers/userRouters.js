const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

// const bcryptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const {
    getAllUsers,
    sendNewUserForm,
    createNewUser,
    sendLoginForm,
    login,
    logout,
} = require('../controllers/userController');

router.get('/', getAllUsers);

router.get('/', sendNewUserForm);

router.post('/signup', createNewUser);

router.get('/login', sendLoginForm);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;