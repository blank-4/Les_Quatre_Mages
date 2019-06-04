const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/UserModel');
const flash = require('connect-flash');
const session = require('express-session');
const chalk = require('chalk');
const authRoutes = require('./routes/auth/index');
const app = express();


// Permet la connexion à la base de données.
mongoose.connect("mongodb://127.0.0.1:27017/mixedwords", {
    useNewUrlParser: true
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({ 
    secret: 'mixedwordssecret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Permet de mettre en place une stratégie permettant de vérifier les informations entrées lors de la connexion afin de s'assurer que les données entrées correspondent à un utilisateur enregistré.
passport.use('local', new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
        if(err) {
            return done(err);
        }
        if(!user) {
            return done(null, false, { message: "Nom d'utilisateur ou mot de passe incorrect" });
        }
        if(password != user.password) {
            bcrypt.compare(password, user.password, function(err, res) {
                if(res) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Nom d'utilisateur ou mot de passe incorrect" })
                }
            });
        }
    });
}));


passport.serializeUser(function(user, done) {
    done(null, user);
});


passport.deserializeUser(function(user, done) {
    done(null, user);
});


// Permet la redirection de l'utilisateur vers telle ou telle page selon s'il s'est connecté avec succès ou pas en servant de la stratégie mise en place plus haut.
app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if(err) {
            return next(err);
        }
        if (!user) {
            console.log(chalk.red("Échec de connexion utilisateur au serveur : " + user));
            return res.render('connection', { errormsg: "Nom d'utilisateur ou mot de passe incorrect" });
        }
        req.logIn(user, function(err) {
            if(err) { 
                return next(err);
            }
            console.log(chalk.green("Utilisateur connecté : " + user.username));
            return res.redirect('/');
        });
    })(req, res, next);
});

app.use(function(req, res, next) {
    res.locals.userLogs = req.user || null;
    next();
});


app.use('/', authRoutes);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


app.listen(3000);