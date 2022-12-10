const AppError = require('./../utils/appError');

const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}:${err.value}.`;
    return new AppError(message, 400)
};

const handleDuplicatesFieldsDB = err => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    console.log(value);

    const message = `Duplicate field value: ${value}.Please use another value`;
    return new AppError(message, 400);
}