var express = require('express');
var UserController = require('../../controllers/UserController.js');
const passport = require('passport');
var router = express.Router();
// Requête GET sur la page d'accueil
router.get('/', function(req, res) {
    res.render('home');
});
router.get('/profile', isLoggedIn, (req, res) => {
    res.status(200).json(req.user);
});
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.status(200).json({
        'message': 'successfully logout'
    });
});
// Requête GET sur la page des scores ( click sur le trophé )
router.get('/leaderboard', function(req, res) {
    res.render('leaderboard');
});
// Requête POST sur la page de jeu ( validation du formulaire de configuration du jeu dans gameconfig )
router.post('/game', function(req, res) {
    console.log(req.body.difficulty, req.body.topic)
    if(req.body.difficulty == (null || undefined)) {
        res.render('gameconfig', { errormsg: "Choisissez une difficulté !" })
    }
    if(req.body.difficulty == "easy" && req.body.topic == "cars") {
        res.render('mixedwordsgrids/easycars');
    }
});
// Requête GET sur la page de connexion ( click sur "connexion" )
router.get('/connection', function(req, res) {
    res.render('connection');
});
// Requête GET sur la page d'inscription ( click sur "s'inscrire" )
router.get('/register', function(req, res) {
    res.render('register');
});
// Requête POST sur la page d'inscription ( validation du formulaire d'inscription )
router.post('/register', UserController.create);
// Requête GET sur toutes les pages ( click sur le bouton home sur chaque page )
router.get('/home', function(req, res) {
    res.render('home');
});
// Requête GET sur profil ( click sur l'avatar sur la page de jeu )
router.get('/profile', function(req, res) {
    res.render('profile');
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
