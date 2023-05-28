const User = require('../models/User');

exports.getUserByUsername =  (username) => User.findOne({ username })
// this is async function, but by returning no need for async-await, and being short we write it in one line, no need for return
   
exports.register = (username, password) =>  User.create({ username, password })
