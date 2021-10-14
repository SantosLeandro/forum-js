const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.render('admin');
});

router.get('/teste',(req,res,next)=>{
    res.render('admin',{msg:"TESTE PAG"});
});



module.exports = router;