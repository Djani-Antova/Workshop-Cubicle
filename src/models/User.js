const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minCharacter: 3
    },        
    password: {
        type: String,
        required: true,     
        minLength: [6, 'Password is too short!']
    },
});
//with mongoose always use function expression
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next()
        })
})

const User = mongoose.model('User', userSchema);

module.exports = User;