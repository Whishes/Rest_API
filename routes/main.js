const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (request, response) => {
    console.log(request);
    response.send('Hello world');
});

router.get('/status', (request, response) => {
    response.status(200).json({message: 'Ok', status: 200 });
});

router.post('/signup', passport.authenticate('signup', { session: false }), (request, response, next) => {
    if (!request.body) {
        response.status(400).json({message: 'invalid body', status: 400 });
    } else {
        response.status(200).json({message: 'Ok', status: 200 });
    }
});

router.post('/login', (request, response, next) => {
    passport.authenticate('login', (error, user) => {
        try {
            if (error) {
                return next(error);
            }
            if (!user) {
                return next(new Error('email and password are required'));
            }

            request.login(user, { session: false }, (err) => {
                if (err) return next(err);
                return response.status(200).json({ user, status: 200 });
            });
        } catch (err) {
            console.log(err);
            return next (err);
        }
    })(request, response, next);
});

router.post('/logout', (request, response) => {
    if (!request.body) {
        response.status(400).json({message: 'invalid body', status: 400 });
    } else {
        response.status(200).json({message: 'Ok', status: 200 });
    }
});

router.post('/token', (request, response) => {
    if (!request.body || !request.body.refreshToken) {
        response.status(400).json({message: 'invalid body', status: 400 });
    } else {
        const { refreshToken } = request.body;
        response.status(200).json({message: `refresh token requested for token: ${refreshToken}`, status: 200 });
    }
});

module.exports = router;