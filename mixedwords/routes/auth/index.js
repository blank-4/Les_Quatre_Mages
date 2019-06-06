const express = require('express');
const User = require('../../models/UserModel');
const UserController = require('../../controllers/UserController.js');
const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const router = express.Router();


// Sert la page d'accueil si l'utilisateur la demande via une requête GET.
router.get('/', function(req, res) {
    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode facile à celui ayant le score le plus faible.
    User.find({}).sort({ easyScore: -1 }).limit(3).exec(function(err, users) {
        if(err) {
            return err;
        } else {
            var easySorting = users;
            // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode moyen à celui ayant le score le plus faible.
            User.find({}).sort({ mediumScore: -1 }).limit(3).exec(function(err, users) {
                if(err) {
                    return err;
                } else {
                    var mediumSorting = users;
                    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode difficile à celui ayant le score le plus faible.
                    User.find({}).sort({ hardScore: -1 }).limit(3).exec(function(err, users) {
                        if(err) {
                            return err;
                        } else {
                            var hardSorting = users;
                            res.render('home', { usersListEasySorted: easySorting, usersListMediumSorted: mediumSorting, usersListHardSorted: hardSorting });
                        }
                    });
                }
            });
        }
    });
});
router.get('/home', function(req, res) {
    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode facile à celui ayant le score le plus faible.
    User.find({}).sort({ easyScore: -1 }).limit(3).exec(function(err, users) {
        if(err) {
            return err;
        } else {
            var easySorting = users;
            // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode moyen à celui ayant le score le plus faible.
            User.find({}).sort({ mediumScore: -1 }).limit(3).exec(function(err, users) {
                if(err) {
                    return err;
                } else {
                    var mediumSorting = users;
                    // Permet de lister les utilisateurs en partant de celui ayant le score le plus élevé en mode difficile à celui ayant le score le plus faible.
                    User.find({}).sort({ hardScore: -1 }).limit(3).exec(function(err, users) {
                        if(err) {
                            return err;
                        } else {
                            var hardSorting = users;
                            res.render('home', { usersListEasySorted: easySorting, usersListMediumSorted: mediumSorting, usersListHardSorted: hardSorting });
                        }
                    });
                }
            });
        }
    });
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
    var loggedUser = res.locals.userLogs;
    // Récupère l'id de l'utilisateur actuellement connecté.
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            // Permet de mettre à jour les informations sur la vue ( view ) lorsque la base de données est mise à jour.
            // Donc nouvelle récupération des data après modifications, s'il y a eu des modifications évidemment.
            res.render('profile', { userLogs: { username: user.username , email: user.email } });
        };
        if(err) {
            return err;
        };
    });
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
router.post('/updateUsername', isLoggedIn, function(req, res) {
    var loggedUser = res.locals.userLogs;
    // Récupère l'id de l'utilisateur actuellement connecté.
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            // Vérifie si un utilisateur possède déjà le nom d'utilisateur souhaité à la modification.
            User.findOne({ username: req.body.newUsername }, function(err, user) {
                console.log(chalk.cyan("Nom d'utilisateur en cours de vérification..."));
                if (user) {
                    console.log(chalk.red("Nom d'utilisateur déjà utilisé."));
                    res.redirect('/profile');
                } else {
                    // Initialisation des paramètres de mise à jour de l'utilisateur.
                    const query = { "_id": loggedUser._id };
                    const update = { "$set": { "username": req.body.newUsername } };
                    const options = { "upsert": false };
                    // Met à jour le nom d'utilisateur.
                    User.updateOne(query, update, options).then(() => { 
                        res.redirect('/profile');
                        console.log(chalk.green("Utilisateur en cours de mise à jour..."));
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


// Permet de modifier son adresse email après avoir vérifié si celle-ci est bien disponible.
// Possible uniquement si l'utilisateur est connecté.
router.post('/updateEmail', isLoggedIn, function(req, res) {
    var loggedUser = res.locals.userLogs;
    // Récupère l'id de l'utilisateur actuellement connecté.
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            // Vérifie si un utilisateur possède déjà l'adresse email souhaitée à la modification.
            User.findOne({ email: req.body.newEmail }, function(err, user) {
                console.log(chalk.cyan("Adresse email en cours de vérification..."));
                if (user) {
                    console.log(chalk.red("Adresse email déjà utilisée."));
                    res.redirect('/profile');
                } else {
                    // Initialisation des paramètres de mise à jour de l'utilisateur.
                    const query = { "_id": loggedUser._id };
                    const update = { "$set": { "email": req.body.newEmail } };
                    const options = { "upsert": false };
                    // Met à jour l'adresse mail de l'utilisateur.
                    User.updateOne(query, update, options).then(() => { 
                        res.redirect('/profile');
                        console.log(chalk.green("Utilisateur en cours de mise à jour..."));
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


// Permet de modifier son mot de passe après avoir vérifié si le premier champ correspond bien au mot passe actuel de l'utilisateur connecté.
// Possible uniquement si l'utilisateur est connecté.
router.post('/updatePassword', isLoggedIn, function(req, res) {
    var loggedUser = res.locals.userLogs;
    // Récupère l'id de l'utilisateur actuellement connecté.
    User.findById(loggedUser._id, function(err, user) {
        if(user) {
            // Vérifie si le premier champ entré correspond bien au mot de passe actuel de l'utilisateur avant de le remplacer par le nouveau.
            User.findOne({ username: loggedUser.username }, function(err, user) {
                if (user) {
                    console.log(chalk.cyan("Mot de passe en cours de vérification..."));
                    bcrypt.compare(req.body.password, user.password, function(err, res) {
                        if(res) {
                            // Initialisation des paramètres de mise à jour de l'utilisateur.
                            const query = { "_id": loggedUser._id };
                            const update = { "$set": { "password": bcrypt.hashSync(req.body.newPassword, 10) } };
                            const options = { "upsert": false };
                            // Met à jour le mot de passe de l'utilisateur.
                            User.updateOne(query, update, options).then(() => { 
                                console.log(chalk.green("Utilisateur en cours de mise à jour..."));
                            }).catch((err) => {
                                console.log(chalk.red(err + " : Échec de mise à jour."));
                            });
                        }
                        if(err) {
                            console.log(chalk.red("Mot de passe incorrect."));
                            return err;
                        }
                    });
                    res.redirect('/profile');
                }
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