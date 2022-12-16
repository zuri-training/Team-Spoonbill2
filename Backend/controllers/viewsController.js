const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');


exports.getIndex = catchAsync(async (req, res) => {
    res.status(200).render('index')
})

exports.getAbout = catchAsync(async (req, res) => {
    res.status(200).render('about us')
})

exports.getContact = catchAsync(async (req, res) => {
    res.status(200).render('contact')
})


exports.getLogin = catchAsync(async (req, res) => {
    res.status(200).render('login')
})

exports.getSignup = catchAsync(async (req, res ) => {
    res.status(200).render('signup')
})

exports.aboutIn = catchAsync(async (req, res) => {
    res.status(200).render('about in')
})

exports.getConversion = catchAsync(async (req, res) => {
    res.status(200).render('conversion')
})

exports.getHistory = catchAsync(async (req, res) => {
    res.status(200).render('history')
    
})

exports.getLibrary = catchAsync(async (req, res) => {
    res.status(200).render('library')
})

