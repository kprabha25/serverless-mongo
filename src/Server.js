const express=require('express');
const bodyParser=require('body-parser');
const db = require('./db');
const api = require("./routers/studentRouter");
const sms = require("./routers/smsRouter");

const app=express();

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);
app.use('/sms', sms);

module.exports = app;