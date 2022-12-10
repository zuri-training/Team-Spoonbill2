const express = require('express');
const globalErrorHandler= require('../Backend/controllers/errorController')
const morgan = require('morgan');
const userRouter =require('./routes/userRoutes')
const app = express();


// Body parser
app.use(express.json());

// Development loging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// Routes
app.use('/api/users', userRouter);
app.use(globalErrorHandler);
module.exports = app;