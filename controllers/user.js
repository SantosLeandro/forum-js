const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user');

exports.getUser = (req, res, next) => {
    console.log(req.params.id);
    User.findById(req.params.id, (err, result) => {
        console.log(result);
        res.render('user', { user: result.rows[0] });
    });
}

exports.newUser = (req, res, next) => {

    const username = req.body.name.trim();
    const email = req.body.email.trim();
    const regex = /^(?=.*\d).{4,8}$/gm;
    const password = req.body.password;
    const found = password.match(regex);
    if(!found || username.length < 4 ){
        console.log('senha invalida');
        res.render('signup',{msg:'Erro!'});
        return;
    }
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

        if (hash) {
            const user = new User(username, req.body.email, hash);
            user.save((err, saved) => {

                if (saved) {
                    console.log("NEW USER CREATED");
                    res.redirect('/');
                }
            });
        }
    });
}

