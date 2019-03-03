var User = require('../models/UserModel');
var bcrypt = require('bcrypt');
var chalk = require('chalk');

class UserController {
    create(req, res) {
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(req.body.username.length < 4) {
            res.render('register', { errormsg: "Votre nom d'utilisateur est trop court !" });
        } else if(req.body.username.length > 25) {
            res.render('register', { errormsg: "Votre nom d'utilisateur est trop long !" });
        } else if(req.body.email == "" || mailformat.test(req.body.email) == false) {
            res.render('register', { errormsg: "Indiquez une adresse mail valide !" });
        } else if(req.body.password.length < 6) {
            res.render('register', { errormsg: "Votre mot de passe est trop court !" });
        } else if(req.body.passwordConfirmation < 6) {
            res.render('register', { errormsg: "Confirmez votre mot de passe !" });
        } else if(req.body.password != req.body.passwordConfirmation) {
            res.render('register', { errormsg: "Vos mots de passe ne correspondent pas !" });
        } else {
            var newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            });
        }
        User.findOne({ username: req.body.username }, function(err, user) {
            console.log(chalk.cyan("Nom d'utilisateur en cours de vérification..."));
            if (err) {
                return err;
            }
            if (user) {
                console.log(chalk.red("Nom d'utilisateur déjà utilisé."));
                res.render('register', { errormsg: "Ce nom d'utilisateur est déjà utilisé !" });
            } else {
                User.findOne({ email: req.body.email }, function(err, user) {
                    console.log(chalk.cyan("Adresse email en cours de vérification..."));
                    if (err) {
                        return err;
                    }
                    if (user) {
                        console.log(chalk.red("Adresse email déjà utilisée."));
                        res.render('register', { errormsg: "Cette adresse email est déjà utilisée !" });
                    } else {
                        User.create(newUser, function(err, user) {
                            if(err) {
                                return err;
                            } else {
                                console.log(user);
                                res.redirect('/index');
                            }
                        });
                    }
                });
            }
        });
    }
}

module.exports = new UserController(); 