const passport = require('passport');
const localStrategy = require('passport-local');

// Handling User Registration
passport.use('signup', new localStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, (request, email, password, done) => {
    const { username } = request.body;
    if (username && username !== 'error') { // placeholder logic
        return done(null, { name: 'joe' });
    } else {
        return done(new Error('invalid user'));
    }
}));

//Handling User Login
passport.use('login', new localStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    if (email !== 'joe@test.com') { // placeholder logic
        return done(new Error('User not found'), false);
    }
    if (password !== 'test') { // placeholder logic
        return done(new Error('Invalid password'), false);
    }

    return done(null, {name: 'joe'});
}));
