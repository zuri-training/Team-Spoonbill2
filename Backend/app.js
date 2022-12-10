const express = require('express')
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

module.exports = app;