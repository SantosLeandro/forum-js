const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/signup', (req,res, next)=>{
    res.render('signup');
});

router.get('/login', (req,res, next)=>{
    res.render('login');
});

router.post('/signup', userController.newUser);

module.exports = router;