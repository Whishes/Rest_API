const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    console.log(request);
    response.send('Hello world');
});

app.get('/status', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/signup', (request, response, next) => {
    next(new Error('test'));
    //response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/login', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/logout', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/token', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/forgot-password', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

app.post('/reset-password', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

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