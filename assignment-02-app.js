const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    console.log('Middleware 1');
    res.send('<h4>Middleware 1</h4>');
    // next();
})

app.use('/', (req,res,next) => {
    console.log('Middleware 2');
    res.send('<h4>Middleware 2</h4>');
})

app.listen(3000);

