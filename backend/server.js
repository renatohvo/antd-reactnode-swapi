require('dotenv').config();
const routeSeeding = require('./routes/seeding.js')
const routePeople = require('./routes/people.js')
const express = require('express');

const port = process.env.PORT;

const app = express();

app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.LOCALHOST);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
    next();
});

app.use('/seeding', routeSeeding)
app.use('/people', routePeople)

app.listen(port, () => {
    console.log('REST API Working on Port:', port);
});
