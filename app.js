const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


const app = express();

app.use(morgan('dev'));

app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// Load tours data

 app.use('/api/v1/tours', tourRouter);
 app.use('/api/v1/users', userRouter); 
 
  // Start server
module.exports = app;