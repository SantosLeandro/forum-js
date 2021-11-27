const router = require('express').Router();

const userController = require('../controllers/account');

router.get('/users',userController.getAllUsers);

router.get('/signup',(req,res)=>{
    res.render('signup');
});

router.post('/signup',userController.signup);

router.get('/users/:id',userController.getUserById);

router.get('/login', (req, res,next)=>{
    res.render('login');
});

router.post('/login',userController.login);

router.get('/logout',userController.logout);




module.exports = router;