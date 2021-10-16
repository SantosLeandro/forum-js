const router = require('express').Router();



router.get('/:id',(req,res,next)=>{
    res.render('index');
});

router.get('/',(req,res,next)=>{
    res.render('index');
});






module.exports = router;