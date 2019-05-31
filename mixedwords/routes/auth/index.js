const express = require('express');
const UserController = require('../../controllers/UserController.js');
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
    res.status(200).render('connection');
});

// Sert la page d'inscription si on la demande via une requête GET.
router.get('/register', function(req, res) {
    res.status(200).render('register');
});

// Sert la page de profile si on la demande via une requête GET.
// Accessible seulement si on est connecté.
router.get('/profile', isLoggedIn, (req, res) => {
    res.status(200).render('profile');
});

// Permet de clôturer la session utilisateur en cours lorsque que l'on clique sur l'icône de déconnexion.
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('home');
});

// Permet de récupérer les informations envoyées par l'utilisateur lors de la soumission d'un formulaire via une requête POST.
router.post('/register', UserController.create);

module.exports = router;

// Middleware permettant de vérifier si un utilisateur est log ( connecté ) ou pas.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}