const express = require('express');

const config = require('./config')
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.listen(config.development.PORT, () => console.log(`Server is running on ${config.development.PORT}...` ))