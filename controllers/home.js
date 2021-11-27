const Category = require('../models/category');
const Forum = require('../models/forum');

exports.getAllCategories = async function (req, res, next) {
    var session = req.session;
    console.log("SESSION:",req.session);
    Forum.fetchAll().then((rows) => {
        res.render('home',{data:rows, session: session, isLoggedIn: session.isLoggedIn});
    });
};