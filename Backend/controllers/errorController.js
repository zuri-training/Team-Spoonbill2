const AppError = require('./../utils/appError');

const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}:${err.value}.`;
    return new AppError(message, 400)
};