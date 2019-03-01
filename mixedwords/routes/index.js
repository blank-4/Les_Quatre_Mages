var express = require('express');
var UserController = require('../controllers/UserController.js');
var router = express.Router();
// Requête GET sur la page d'accueil
router.get('/', function(req, res) {
    res.render('index');
    console.log(media500);
});
// Requête GET sur la page des scores ( click sur le trophé )
router.get('/leaderboard', function(req, res) {
    res.render('leaderboard');
});
// Requête POST sur la page configuration du jeu ( validation du formulaire de connexion dans l'accueil )
router.post('/gameconfig', function(req, res) {
    res.render('gameconfig');
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
// Requête GET sur la page d'inscription ( click sur "créer un compte" )
router.get('/register', function(req, res) {
    res.render('register');
});
// Requête POST sur la page d'inscription ( validation du formulaire d'inscription )
router.post('/register', UserController.create);
// Requête GET sur toutes les pages ( click sur le bouton home sur chaque page )
router.get('/index', function(req, res) {
    res.render('index');
});
// Requête GET sur profil ( click sur l'avatar sur la page de jeu )
router.get('/profile', function(req, res) {
    res.render('profile');
});
module.exports = router;
