const express = require('express');
const User = require('../../models/UserModel');
const UserController = require('../../controllers/UserController.js');
const chalk = require('chalk');
const router = express.Router();


// Sert la page d'accueil si l'utilisateur la demande via une requête GET.
router.get('/', function(req, res) {
    res.render('home');
});
router.get('/home', function(req, res) {
    res.render('home');
});


// Sert la page des paramètres de jeu si l'utilisateur la demande via une requête GET.
// Accessible seulement si l'utilisateur est connecté.
router.get('/gamesettings', isLoggedIn, function(req, res) {
    res.render('gamesettings');
});


// Sert la page de connexion si l'utilisateur la demande via une requête GET.
// Accessible seulement si l'utilisateur est déconnecté.
router.get('/connection', function(req, res) {
    var loggedUser = res.locals.userLogs;
    if(loggedUser) {
        res.status(400).json({
            'message': 'access denied'
        });
    } else {
        res.render('connection');
    }
});

// Sert la page d'inscription si l'utilisateur la demande via une requête GET.
// Accessible seulement si l'utilisateur est déconnecté.
router.get('/register', function(req, res) {
    var loggedUser = res.locals.userLogs;
    if(loggedUser) {
        res.status(400).json({
            'message': 'access denied'
        });
    } else {
        res.render('register');
    }
});


// Sert la page de profile si l'utilisateur la demande via une requête GET.
// Accessible seulement si l'utilisateur est connecté.
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});


// Permet de clôturer la session utilisateur en cours lorsque que l'utilisateur clique sur l'icône de déconnexion.
// Accessible seulement si l'utilisateur est connecté.
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('home');
});


// Permet de récupérer les informations envoyées par l'utilisateur lors de la soumission d'un formulaire d'inscription via une requête POST.
// Accessible seulement si l'utilisateur est déconnecté.
router.post('/register', UserController.create);


// Permet de modifier son nom d'utilisateur après avoir vérifié si celui-ci est bien disponible.
// Possible uniquement si l'utilisateur est connecté.
router.post('/updateUser', isLoggedIn, function(req, res) {
    var loggedUser = res.locals.userLogs;
    // Récupère l'id de l'utilisateur actuellement connecté.
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            // Vérifie si un utilisateur possède déjà le nom d'utilisateur souhaité à la modification.
            User.findOne({ username: req.body.newUsername }, function(err, user) {
                console.log(chalk.cyan("Nom d'utilisateur en cours de vérification..."));
                if (user) {
                    res.render('profile');
                    console.log(chalk.red("Nom d'utilisateur déjà utilisé."));
                } else {
                    // Initialisation des paramètres de mise à jour de l'utilisateur.
                    const query = { "_id": loggedUser._id };
                    const update = { "$set": { "username": req.body.newUsername } };
                    const options = { "upsert": false };
                    // Met à jour le nom d'utilisateur.
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


// Sert la page des scores si l'utilisateur la demande via une requête GET.
router.get('/ladder', function(req, res) {
    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode facile à celui ayant le score le plus faible.
    User.find({}).sort({ easyScore: -1 }).exec(function(err, users) {
        if(err) {
            return err;
        } else {
            var easySorting = users;
            // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode moyen à celui ayant le score le plus faible.
            User.find({}).sort({ mediumScore: -1 }).exec(function(err, users) {
                if(err) {
                    return err;
                } else {
                    var mediumSorting = users;
                    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode difficile à celui ayant le score le plus faible.
                    User.find({}).sort({ hardScore: -1 }).exec(function(err, users) {
                        if(err) {
                            return err;
                        } else {
                            var hardSorting = users;
                            res.render('scores', { usersListEasySorted: easySorting, usersListMediumSorted: mediumSorting, usersListHardSorted: hardSorting });
                        }
                    });
                }
            });
        }
    });
});


// Sert la page de jeu en difficulté facile si l'utilisateur la demande via une requête GET.
router.post('/easy', isLoggedIn, function(req, res) {
    res.render('difficulty/easy');
});


// Sert la page de jeu en difficulté moyenne si l'utilisateur la demande via une requête GET.
router.post('/medium', isLoggedIn, function(req, res) {
    res.render('difficulty/medium');
});


// Sert la page de jeu en difficulté difficile si l'utilisateur la demande via une requête GET.
router.post('/hard', isLoggedIn, function(req, res) {
    res.render('difficulty/hard');
});


module.exports = router;


// Middleware permettant de vérifier si un utilisateur est log ( connecté ) ou pas.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(400).json({
        'message': 'access denied'
    });
};