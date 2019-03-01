var User = require('../models/UserModel');
var bcrypt = require('bcrypt');

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
                password: bcrypt.hashSync(req.body.password, 10),
            })
            console.log(bcrypt.compareSync(req.body.password, newUser.password));
        }
        newUser.save().then(() => {
            res.render('register', { errormsg: "Inscription validée !" }) }).catch(() => { res.render('register', { errormsg: "Échec d'inscription." }) })
    }
    async list(req, res) {
        try {
            let user = await User.find({username: req.query.username}).exec()
            res.json(user)
        } catch (err) {
            console.log(err);
            res.json({ error: true })
        }
    }
}

module.exports = new UserController(); 