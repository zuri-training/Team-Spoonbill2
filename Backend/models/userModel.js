const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength:8,
        select:false
    },
    passwordConfirm: {
        type: String,
        validate: {
            // This only works on create and save
            validator: function (el) {
              return  el === this.password;
            },
            message:'Passwords do not match'
        }
    },
    // passwordChangedAt: Date,
    // passwordResetToken: String,
    // passwordResetExpires: Date,
    // active: {
    //     type: Boolean,
    //     default: true,
    //     select: false
    // }


    
});

const User = mongoose.model('User', userSchema);
module.exports = User;