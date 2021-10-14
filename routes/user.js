const router = require('express').Router();
const userController = require('../controllers/user')

router.get('/',(req,res,next)=>{
    res.render('user');
});

router.post('/', userController.newUser);

router.get('/:id', userController.getUser);



module.exports = router;