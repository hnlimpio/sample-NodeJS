require('dotenv').config({silent:true});

const express = require('express');

const app = express();

// Setup middleware for parsing application/json
app.use(express.json());
// Setup middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const private = require('./routes/private');
  
app.use('/private', private);
 
app.listen(process.env.PORT, function(){
  console.log('Listening port:' + process.env.PORT);
});
