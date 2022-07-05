const express = require('express')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectdb = require('./config/config');
const mongoose = require('mongoose');
require('colors');

//config dotenv
dotenv.config()

//connection mongo
connectdb();

const app= express();

//middleware
app.use(express.json()); 
app.use(morgan('dev'));

//route
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/orders', require('./routes/orderRoute'));


app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>');
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`${process.env.PORT}`);
})