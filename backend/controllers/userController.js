const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc     Register new User
//routes    POST /api/Users
//@access   Public

const registerUser = (req, res) => {
  res.json({ message: "Register User" })
}

//@desc     Authenticate a  User
//routes    POST /api/Users/login
//@access   Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" })
}

//@desc     Get User deta
//routes    GET /api/Users/me
//@access   Public

const getMe = (req, res) => {
  res.json({ message: "User data" })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
