const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user'
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

// Defining an instance method for hashing password
userSchema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
    // Hash the password with a cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete password field
    this.passwordConfirm = undefined
    next()
});

// Defining an instance method to check if password has been changed
userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
});


const User = mongoose.model('User', userSchema);
module.exports = User;