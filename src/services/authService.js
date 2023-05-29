
const User = require('../models/User');
const config = require('../config');
const jwt = require('../lib/jsonwebtoken')

exports.getUserByUsername = (username) => User.findOne({ username })
// this is async function, but by returning no need for async-await, and being short we write it in one line, no need for return

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    const isValid = await user.validatePassword(password)

    if (!user || !isValid) {
        throw 'Invalid username or password'
    }
    // const payload = { username: user.username };
    // const token = await jwt.sign(payload, config.SECRET, { expiresIn: '2h' });

    return user;

}
