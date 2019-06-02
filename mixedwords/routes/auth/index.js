const express = require('express');
const User = require('../../models/UserModel');
const UserController = require('../../controllers/UserController.js');
const chalk = require('chalk');
const router = express.Router();

// Sert la page d'accueil si on la demande via une requête GET.
router.get('/', function(req, res) {
    res.render('home');
});
router.get('/home', function(req, res) {
    res.render('home');
});

// Sert la page des paramètres de jeu si on la demande via une requête GET.
// Accessible seulement si on est connecté.
router.get('/gamesettings', isLoggedIn, function(req, res) {
    res.render('gamesettings');
});

// Sert la page de connexion si on la demande via une requête GET.
router.get('/connection', function(req, res) {
    res.render('connection');
});

// Sert la page d'inscription si on la demande via une requête GET.
router.get('/register', function(req, res) {
    res.render('register');
});

// Sert la page de profile si on la demande via une requête GET.
// Accessible seulement si on est connecté.
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

// Permet de clôturer la session utilisateur en cours lorsque que l'on clique sur l'icône de déconnexion.
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('home');
});

// Permet de récupérer les informations envoyées par l'utilisateur lors de la soumission d'un formulaire d'inscription via une requête POST.
router.post('/register', UserController.create);

// Permet de modifier son nom d'utilisateur après avoir vérifié si celui-ci est bien disponible.
// Possible uniquement si on est connectés.
router.post('/updateUser', isLoggedIn, function(req, res) {
    var loggedUser = res.locals.userLogs;
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            User.findOne({ username: req.body.newUsername }, function(err, user) {
                console.log(chalk.cyan("Nom d'utilisateur en cours de vérification..."));
                if (user) {
                    res.render('profile');
                    console.log(chalk.red("Nom d'utilisateur déjà utilisé."));
                } else {
                    const query = { "_id": loggedUser._id };
                    const update = { "$set": { "username": req.body.newUsername } };
                    const options = { "upsert": false };
                    User.updateOne(query, update, options).then(() => { 
                        console.log(chalk.green("Utilisateur mis à jour."));
                        res.render('profile', { userLogs: { username: req.body.newUsername } });
                    }).catch((err) => {
                        console.log(chalk.red(err + " : Échec de mise à jour."));
                    });
                };
                if (err) {
                    return err;
                };
            });
        };
        if(err) {
            return err;
        };
    });
});

// Sert la page des scores si on la demande via une requête GET.
router.get('/ladder', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            return err;
        }
        if(users) {
            console.log(users);
            res.render('scores', { usersList: users });
        }
    });
});

// Sert la page de jeu en difficulté facile si on la demande via une requête GET.
router.post('/easy', isLoggedIn, function(req, res) {
    res.render('difficulty/easy');
});

// Sert la page de jeu en difficulté moyenne si on la demande via une requête GET.
router.post('/medium', isLoggedIn, function(req, res) {
    res.render('difficulty/medium');
});

// Sert la page de jeu en difficulté difficile si on la demande via une requête GET.
router.post('/hard', isLoggedIn, function(req, res) {
    res.render('difficulty/hard');
});

module.exports = router;

// Middleware permettant de vérifier si un utilisateur est log ( connecté ) ou pas.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}