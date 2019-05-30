var express = require('express');
var UserController = require('../../controllers/UserController.js');
var router = express.Router();

// Requêtes GET sur la page d'accueil
router.get('/', function(req, res) {
    res.render('home');
});
router.get('/home', function(req, res) {
    res.render('home');
});

// Requête GET sur la page de jeu
router.get('/gamesettings', function(req, res) {
    res.render('gamesettings');
});

router.get('/connection', function(req, res) {
    res.render('connection');
});


router.get('/register', function(req, res) {
    res.render('register');
});


router.get('/profile', isLoggedIn, (req, res) => {
    res.status(200).json(req.user);
});


router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.status(200).render('home', { isLoggedIn: false });
});

router.post('/register', UserController.create);




module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
