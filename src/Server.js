const express=require('express');
const bodyParser=require('body-parser');
const db = require('./db');
const api = require("./routers/studentRouter");

const app=express();

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);

module.exports = app;