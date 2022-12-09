const User = require("../models/userModel");
const jwt = require('jsonwebtoken');







exports.signup = async (req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    try {
        res.status(201).json({
            status: 'created',
            data: {
                newUser
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
