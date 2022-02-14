const express = require('express');

const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors'); //package for providing a Connect/Express middleware that can be used to enable CORS with various options.

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


/* CORS */
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Import Routes:
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');


// Define Routes:
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
