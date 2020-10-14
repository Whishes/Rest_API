const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');
const app = express();
const port = 3000;

// Updating Express settings
app.use(bodyParser.urlencoded({ extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Setting up other routes
app.use('/', routes);
app.use('/', passwordRoutes);

// Catch all other routes
app.use((request, response) => {
    response.status(404).json({message: '404 - Not Found', status: 404});
});

// Handling Errors
app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({error: error.message, status: 500});
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});