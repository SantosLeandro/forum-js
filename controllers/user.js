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

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

        if (hash) {
            const user = new User(req.body.name, req.body.email, hash);
            user.save((err, saved) => {

                if (saved) {
                    console.log("NEW USER CREATED");
                    res.redirect('/');
                }
            });
        }
    });
}

